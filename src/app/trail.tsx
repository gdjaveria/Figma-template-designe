import React from "react";

const Trail =() => {
    return(

 <div className=" container mx-auto flex flex-col gap-5 items-center justify-center py-10">
 <p className="text-slate-700 text-xl font-medium text-center md:text-2xl lg:text-4xl ">Get a free trial lesson today</p>
 <p className="text-base text-gray-500 text-center font-normal  sm:text-lg lg:text-2xl  ">
      Start fulfilling your language dreams with 
            our school</p>

   <div className="flex items-center gap-3 flex-col sm:flex-col lg:flex-row lg:gap-10 mt-5 "> 

    <input type="text" className='px-5 py-5 rounded-full w- sm:w-60 lg:w-96 outline-none mt-5 bg-[#f8fafe]'
     placeholder='enter a email' />
     <button className="btn bg-[#524FD5] text-white rounded-full py-2 px-4 border-none lg:btn-lg btn-sm ">
      Send</button>
   </div>
        </div>
    )}

    export default Trail;