"use client"
import Customer from "./components/customer";
import Footer from "./components/footer";
import { RxCross2 } from "react-icons/rx";
import Arrivals from "./components/Arrivals";
import Image from "next/image";

export default function Home()  {
  return (
    <div>
   
{/* Sign-Up Banner */}
<div className="w-full bg-black h-[38px] flex py-[9px]  justify-center  px-4 md:px-[100px] w-[422px] items-center">
  <p className="font-satoshi text-[10px] md:text-[16px] font-normal leading-[16px] md:leading-[18.9px] text-white underline-offset-auto decoration-slice ">
    Sign up and get 20% off your first order.
    <span className="ml-2 font-medium underline decoration-solid ">
      Sign Up Now
    </span>
    <RxCross2 className="cross" />
  </p>
</div>


<div   className="bg-home">
<Image height={100} width={100} src="/vector.png" alt="vector" className="vector1"/>
<Image height={100} width={100} src="/vector.png" alt="vector" className="vector2"/>
<p className='index1'>
  FIND CLOTHES THAT MATCHES YOUR STYLE</p>
  <p className='index2'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and
     cater to your sense of style.</p>
     <button className="shop-Button">Shop Now</button>
     <Image height={600} width={600} src="/bg-res.png" alt="picture" className="bg-res"/>
</div><div className="brand-list">
<ul><li>VERSACE</li><li>ZARA</li><li>GUCCI</li></ul><ul><li>PRADA</li><li>CalvinKlein</li></ul></div>
<Arrivals/>
<Customer/>
<Footer/>
</div>
  );
};

