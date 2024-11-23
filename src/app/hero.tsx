import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import HeroImage from "/public/hero.png";


const Hero =()=>{
    return(
        <div className="container mx-auto my-10">
    <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 sm:px-8 rounded-3xl ">

        <Navbar/>

    <div className="flex lg:justify-between items-center sm:justify-center   flex-col justify-center lg:flex-row gap-5 ">
    <div className="flex flex-col lg:gap-10 gap-5">

      <p className="text-2xl font-medium py-6 sm:text-3xl md:tex-4xl lg:text-6xl ">
       A <span className="text-[#524FD5]">Unique</span> approach <br/>to learning foregin<br/>languages 
       online </p>

    <p className="text-sm text-gray-500   sm:text-base lg:text-lg ">
        Learn at your own pace, with lifetime acess on<br/>mobile and desktop</p>

        <button className="btn bg-[#524FD5] text-white rounded-full py-2 px-2 border-none  
        btn-sm lg:btn-lg w-30 lg:w-44 sm:w-22 capitalize ">
            Get Started</button>
</div>
   <Image src={HeroImage} alt=""/>

    </div>
    </div>
        
           
    

     </div>

    )
}
export default Hero;