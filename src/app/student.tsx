import React from "react";
import Image from "next/image";
import Top from "/public/student11.png";
import Flag2 from "/public/flag2.png";


const Student =() => {
    return(
        <div className=" sm:flex-col container mx-auto">
         <p className="text-gray-500  text-base  py-1 font-medium uppercase lg:text-xl sm:text-2xl">Top Studying</p>
  <p className="text-gray-800 text-3xl font-medium capitalize sm:text-2xl md:text-3xl lg:text-4xl  ">
    Our Student say </p>
       
 <div className="flex  flex-col sm:flex-col md:flex-row lg:flex-row justify-center py-10   gap-2 sm:py-10 lg:py-20">

    <Image className="w-96" src={Top} alt =""/>

  <div className="flex flex-col gap-5 mt-2 items-start">
 <p className="text-xl font-semibold px-8   sm:text-2xl md:text-3xl lg:text-4xl ">Martin watson</p>

    <div className="flex items-start px-10">
   <Image src={Flag2} alt="student image"/>

        <p className="text-gray-500 py-2 text-start">B2 course student</p>
   </div>  
       
       <p className="text-2xl font-normal px-10 sm:text-lg md:text-2xl lg:text-3xl">
      There is no way I could have made <br/>the same progress 
      learning Spanish without using Lingua.The best part<br/>
      is now learning Spanish has become <br/>
      one of my biggest hobbies.
       </p>

  </div>
  </div>
    </div>
    )}

export default Student;