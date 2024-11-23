import React from "react";
import Image from "next/image";
import Logo from "/public/logo.img.png";

const Navbar =() =>{
    return(
        <div className="container mx-auto ">
     <div className="flex lg:justify-between items-center  sm:flex-col flex-col gap-5 
     lg:flex-row justify-center ">
        <Image src={Logo} alt="logo image"/>
        
    <div className="flex items-center font-normal gap-10 flex-col lg:flex-row 
    lg:justify-between ">
                <p>Courses</p>
                <p>About Us</p>
                <p>Teacher</p>
                <p>Pricing</p>
                <p>Careers</p>
                <p>Blogs</p>
    </div>
    <button className="btn bg-white text-[#524FD5] rounded-full py-
     px-2 font-medium border-none hover:bg-gray-400">Get Started</button>
    </div>
        </div>
    )

}

export default Navbar;