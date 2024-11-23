import React from "react";
import Image from "next/image";
import Teacher1 from "/public/teach1.png";
import Teacher2 from "/public/teach2.png";
import Teacher3 from "/public/teach3.png";
import Flag1 from "/public/flag1.png";
import Flag2 from "/public/flag2.png";
import Flag3 from "/public/flag3.png";



const Teacher =() => {
    return(
     <div className="container mx-auto py-10">
     <p className="text-base font-medium text-gray-500 uppercase lg:text-xl">Key Person</p>
     <p className=" text-3xl font-semibold text-slate-700  mt-3 sm:text-2xl lg:text-4xl  ">
       Meet our Teachers</p>

    <div className="grid  gap-6 py-20  sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 lg:gap-16  ">

    <div className="flex flex-col gap-5">
   <Image src={Teacher1} alt=""/>
    <p className=" text-2xl font-semibold">Christan Howard</p>
  <div className="flex items-center">
   <Image src={Flag1} alt=""/>
   <p className="text-gray-500">Italian teacher</p>
</div>
</div>

 <div className="flex flex-col gap-5">
<Image src={Teacher2} alt=""/>
 <p className="text-2xl font-semibold">Sandra Wilson</p>
  <div className="flex items-center">
     <Image src={Flag2} alt=""/>
     <p className="text-gray-500">
        Spanish teacher</p>
</div>
</div>

 <div className="flex flex-col gap-5">
    <Image src={Teacher3} alt=""/>
     <p className="text-2xl font-semibold">Jimmy Cooper</p>
  <div className="flex items-center">
  <Image src={Flag3} alt=""/>
  <p className="text-gray-500">
  English teacher</p>
</div>
</div>


</div>
</div>


    )
}


export default Teacher;
