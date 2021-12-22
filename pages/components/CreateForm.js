

export default function CreateForm(props) {
    return (
        <form className="flex-col w-5/6 mx-auto my-8 bg-green-300 border border-green-500 rounded-md" onSubmit={props.onCreate}>       
  
        <div className="flex mx-3 my-4">
          <div className= 'flex-col w-2/3 mr-8 text-center '>
            <label  className="font-semibold "  htmlFor='location' >ADD Location</label>
            <input name="location" className="flex-auto w-full mt-2" placeholder=' Cookie Stand Location'/>
          </div>
          <button className="w-1/3 my-1 font-semibold bg-green-500 rounded">CREATE STAND</button>
        </div>
  
        <div className="flex mx-3 my-4 mt-8 justify-evenly w-7/8">
          <div className="flex-col w-1/3 p-1 mr-5 text-sm font-semibold text-center ">
            <label htmlFor="MinCPH" >MINUIMUM CUSTOMERS PER HOUR</label>
            <input name="minCustomers" className="flex-auto w-full py-1 mt-2"  placeholder='0'/>
          </div>
          <div className="flex-col w-1/3 p-1 mr-5 text-sm font-semibold text-center ">
            <label htmlFor='MaxCPH'>MAXIMUM CUSTOMERS PER HOUR</label>
            <input name="maxCustomers" className="flex-auto w-full py-1 mt-2"  placeholder='0'/>
          </div>
          <div className="flex-col w-1/3 p-1 mr-5 text-sm font-semibold text-center ">
            <label htmlFor='avgCPH'>AVERAGE COOKIE PER SALE</label>
            <input name="avgCookies" className="flex-auto w-full py-1 mt-2" placeholder='0'/>
          </div>
        </div>
        
      </form>
    )
}
