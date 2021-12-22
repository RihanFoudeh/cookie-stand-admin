

export default function ReportTable(props) {
    if (props.report.length === 0) {
        return (
            <h2 className="mx-auto my-8 text-xl font-semibold text-center">No Cookie Stands Available</h2>
        )
    } else {
        return (
            <table className='w-5/6 mx-auto mt-4 text-center border border-green-300 rounded-md'>

                <thead className='bg-green-500 border border-green-300'>
                    <th className='px-2'>Location</th>
                    {
                        props.workingHours.map(item => {
                            return (
                                <th>{item} </th>
                            )
                        })
                    }
                    <th>Totals</th>
                </thead>

                <tbody>
                    {
                        props.report.map((store, idx) => {

                            const element =
                                <>

                                    <td className='px-2 border border-black' >{store.location}<button className="" onClick={() => { props.deleteHandler(store.id) }  } > <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-5 text-red-700 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg> </button></td>
                                    {
                                        store.hourlySales.map(item => {
                                            return (
                                                <td className='border border-black'> {item} </td>
                                            )
                                        })
                                    }
                                    <td className='border border-black'>{store.total}</td>
                                </>

                            if (idx % 2 == 0) {
                                return (
                                    <tr className='bg-green-400'>
                                        {element}
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr className='bg-green-300'>
                                        {element}
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>

                <tfoot className='bg-green-500'>
                    <td className='px-2 font-semibold border border-black'>Totals</td>
                    {
                        props.totals.map(item => {
                            return (
                                <td className='font-semibold border border-black'>{item}</td>
                            )
                        })
                    }
                </tfoot>
            </table>
        )
    }
}