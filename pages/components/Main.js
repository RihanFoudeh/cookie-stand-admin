import React, { useState } from "react";

export default function Main() {

    const [cookieStand, setCookieStand] = useState([]);

    function formCookieStand(event) {
        event.preventDefault()
        cookieStand="";

        const formCookieStand = {
            location: event.target.location.value,
            minCustomers: Number(event.target.minCustomers.value),
            maxCustomers: Number(event.target.maxCustomers.value),
            avgCookies: Number(event.target.avgCookies.value)
        }
        setCookieStand(JSON.stringify(formCookieStand))
    }
    return (
        <main className="flex flex-col items-center px-10 text-center">

            <div className="w-5/6 m-8 bg-green-300">

                <h2 className="m-4 text-3xl">Create Cookie Stand</h2>

                <form onSubmit={formCookieStand}>

                    <label className="mr-2.5 text-xl">location</label>

                    <input name="location" className="w-10/12"></input>

                    <div className="grid grid-cols-4 mt-4 mb-4">

                        <section>
                            <label className="text-xl">Minimum Customers per Hour</label>
                            <input name="minCustomers" className="w-60"></input>
                        </section>

                        <section>
                            <label className="text-xl">Maximum Customers per Hour</label>
                            <input name="maxCustomers" className="w-60"></input>
                        </section>
                        <section>
                            <label className="text-xl">Average Cookies per Sale</label>
                            <input name="avgCookies" className="w-60"></input>
                        </section>

                        <button className="text-xl bg-green-500 w-60 h-14">Create</button>

                    </div>

                </form>

            </div>

            <h3 className="">Report Table Coming Soon...</h3>

            <div className="mt-4 text-center">
                {
                    
                            <p class="m-2 text-xl">{cookieStand}</p>
                    
                }
            </div>

        </main>
    )
}