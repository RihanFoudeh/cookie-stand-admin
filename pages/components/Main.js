import React, { useState, useEffect } from "react";
import workingHours from './data'
import CreateForm from './CreateForm.js';
import ReportTable from './ReportTable.js';
import axios from "axios";


import Footer from './Footer'


const baseUrl = 'https://cookie-stand-api-rihan.herokuapp.com/';
const responsesEndPoint = baseUrl + 'api/v1/cookie_stands/';

export default function Main(props) {

    const [report, setallstores] = useState([])

    const [totals, setbranchestotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])


    useEffect(() => {
        if (props.token) {
            getRepliesFromAPI();
        }
    }, [props.token]);

    let allData = []
    const getRepliesFromAPI = async () => {
        console.log("hiii");

        const config = { headers: { 'Authorization': 'Bearer ' + props.token } };
        const answers = await axios.get(responsesEndPoint, config);
        console.log("hiiiia", answers.data);

        const mappedData = answers.data.map((item) => {
            const storeData = {
                id: item.id,
                location: item.location,
                average_cookies_per_sale: item.average_cookies_per_sale,
                minimum_customers_per_hour: item.minimum_customers_per_hour,
                maximum_customers_per_hour: item.maximum_customers_per_hour,
                hourlySales: item.hourly_sales,

            }
            allData.push(storeData)
            setallstores([...report, ...allData]);
            return storeData
        });
    }
   
    function onCreate(event) {
        event.preventDefault();
        let minCustomers = parseInt(event.target.minCustomers.value)
        let maxCustomers = parseInt(event.target.maxCustomers.value)
        let avgCookies = parseInt(event.target.avgCookies.value)
        let sum = 0
        const store = {
            location: event.target.location.value,
            hourlySales: workingHours.map(() => Math.ceil(avgCookies * (Math.ceil(Math.random() * (maxCustomers - minCustomers) + minCustomers)))),
        }
        for (let i = 0; i < workingHours.length; i++) {
            sum += store.hourlySales[i]
        }
        store.total = sum

        setallstores([...report, store])


        let total_sum = totals.map((item, idx) => {
            if (idx === totals.length - 1) {
                return item + store.total
            }
            return item + store.hourlySales[idx]

            
        })
        const configPost = {
            method: "POST",
            url: responsesEndPoint,
            headers: { "Authorization": `Bearer ${props.token}` },
            data:  {
                location: event.target.location.value,
                description: '',
                hourly_sales: store.hourlySales,
                minimum_customers_per_hour: minCustomers,
                maximum_customers_per_hour: maxCustomers,
                average_cookies_per_sale: avgCookies,
                owner: 1
            }
        }
    
        axios(configPost)

        setbranchestotals(total_sum)




    };



    const deleteHandler =async (id) => {
        const config = {
            method: "DELETE",
            url: `https://cookie-stand-api-rihan.herokuapp.com/api/v1/cookie_stands/${id}`,
            headers: { "Authorization": `Bearer ${props.token}` }



        }

       
        await axios(config)
    }
return (
    <>
        <main className="">

            <CreateForm onCreate={onCreate} />

            <ReportTable report={report} workingHours={workingHours} totals={totals} deleteHandler={deleteHandler} />
            <Footer report={report} />

        </main>
    </>
)
}