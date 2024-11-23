import React from "react";
import Image from "next/image";
import Icon1 from "/public/icon1.png";
import Icon2 from "/public/icon2.png";
import Icon3 from "/public/icon3.png";

const Value =()=>{
    return(
     <div className="container mx-auto py-10">
      <p className="text-base font-medium text-gray-500 text-center capitalize  lg:text-xl sm:text-2xl">
     why choose us</p>

    <p className="text-3xl font-semibold text-gray-500 text-center mt-3 sm:text-2xl lg:text-4xl">
      Our Values </p>

    
  <div className="grid  gap-6 py-20  sm:grid-cols-1 
   md:grid-col-2 lg:grid-cols-3 lg:gap-16 ">
   <div className="flex flex-col gap-5 items-center sm:flex-col  ">
     <Image src={Icon1} alt=""/>

<p className="text-2xl font-semibold">Speaking clubs </p>
 <p className="text-gray-500 text-center">In our school you will practice<br/> 
  your speaking skills and just get
  lot of positive emotions </p>
 </div>


   <div className="flex flex-col gap-5 items-center">
    <Image src={Icon2} alt=""/>
    <p className="text-2xl font-semibold">Quality control </p>
  <p className="text-gray-500 text-center">In our school you will practice<br/> 
  your speaking skills and just get
  lot of positive emotions </p>
</div>


<div className="flex flex-col gap-5 items-center">
    <Image src={Icon3} alt=""/>
    <p className="text-2xl font-semibold">Progress analyasis </p>
  <p className="text-gray-500 text-center">In our school you will practice<br/> 
  your speaking skills and just get
  lot of positive emotions </p>
</div>
</div>
</div>

    )}

    export default Value;