import React from "react";
import Image from "next/image";
import Logo from "/public/logo.img.png";
import { CiFacebook,CiInstagram,CiTwitter} from "react-icons/ci";


const Footer =()=>{
    return(
        <div className="container my-10 pt-10 mx-auto">
     <div className="bg-[#f8fafe] grid  gap-5 px-10 py-10 rounded-3xl items-center justify-center 
     sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 lg:gap-10">

    <div className="flex flex-col sm:flex-col items-center lg:items-start gap-5">
     <Image src={Logo} alt="footer logo"/>
     <p className="mt-5 py-2 px-5  items-center text-center sm:text-center lg:text-start">20 Osgood Rd,
     <br/>Milford, NH 03055, USA<br/>
        +1288-7123-90213</p>
</div>

<div>
<div className="flex flex-col sm:flex-col items-center">
    <h3 className="text-xl py-2 font-medium ">Company</h3>
    <p className="text-base mt-1">Careers</p>
    <p className="text-base mt-1">Teachers</p>
    <p className="text-base mt-1">Support</p>
    <p className="text-base mt-1">Contact</p>
</div>
</div>

<div>
<div className="flex flex-col sm:flex-col items-center">
    <h3 className="text-xl py-2 font-medium">Product</h3>
    <p className="text-base mt-1">Courses</p>
    <p className="text-base mt-1">Pricing</p>
    <p className="text-base mt-1">Blog</p>
</div>
</div>

<div>
<div className="flex flex-col sm:flex-col items-center">
    <h3 className="text-xl py-2 font-medium">Legal</h3>
    <p className="text-base mt-1">Terms & condition</p>
    <p className="text-base mt-1">Privacy policy</p>
</div>
</div>

     <div className="flex flex-col sm:flex-col gap-5 items-center">
     <CiFacebook className="text-3xl text-gray-600  hover:cursor-pointer hover:text-gray-900"/>
     <CiTwitter className="text-3xl text-gray-600 hover:cursor-pointer hover:text-gray-900"/>
     <CiInstagram className="text-3xl text-gray-600 hover:cursor-pointer hover:text-gray-900"/>

</div>
 </div>
 </div>

    )}


    export default Footer;