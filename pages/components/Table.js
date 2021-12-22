import React from 'react'

function Table(props) {
    const { branch, hourly, data, deleteHandler } = props
    const hourList = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
    // console.log("from table: ",data)
    return (
        <div className="m-5 p-4 w-full">
            {data[0] == null && "No Coockie Stand Available"}
            {data[0] != null &&

                <table className='w-10/12 mx-auto mt-4 text-center border border-red-300  rounded-lg '>
                    <thead className='bg-red-500 border border-red-300'>
                        <th>Location</th>
                        {hourList.map(hour => {
                            return (<th>{hour}</th>)
                        })}
                        <th>Totals</th>
                    </thead>

                    <tbody>
                        {
                            data.map((stand, index) => {

                                let randomized = stand.hourly_sales.map(th => {
                                    return <td className='border border-black'>{th}</td>
                                })

                                return (
                                    index % 2 == 0 ? (<tr className='bg-red-400'>
                                        <td className='px-2 border border-black' >
                                            {stand.location}
                                            <button onClick={() => { deleteHandler(stand.id) }} className='w-8  bg-orange-50 rounded-full text-red-900 font-black float-right' >X</button>
                                        </td>
                                        {randomized}
                                    </tr>) : (<tr className='bg-red-300'>
                                        <td className='px-2 border border-black' >
                                            {stand.location}
                                            <button onClick={() => { deleteHandler(stand.id) }} className='w-8  bg-orange-50 rounded-full text-red-900 font-black float-right'>X</button>
                                        </td>
                                        {randomized}
                                    </tr>)
                                )
                            })
                        }
                    </tbody>

                    <tfoot>
                        <tr className='bg-red-500'>
                            <td className='font-semibold border border-black'>Totals</td>
                            {
                                hourly.map(th => {
                                    return <td className='font-semibold border border-black'>{th}</td>
                                })
                            }


                        </tr>
                    </tfoot>

                </table>}
        </div>
    )
}

export default Table