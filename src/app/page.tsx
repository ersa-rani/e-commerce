"use client"
import Customer from "./components/customer";
import Footer from "./components/footer";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import Arrivals from "./components/Arrivals";
import Image from "next/image";

export default function Home()  {
  return (
    <div>
   <div className="w-full max-w-[1240px] h-[41px] flex items-center absolute top-[62px] left-0 md:left-[100px] gap-[20px] md:gap-[40px] px-4 md:px-0">
  {/* Logo */}
  <div className="w-auto h-[22px]">
    <p className="font-integral-cf text-[24px] md:text-[32px] font-extrabold leading-[28px] md:leading-[38.4px] text-left decoration-slice">
      SHOP.CO
    </p>
  </div>

  {/* Navigation Links */}
  <div className="flex items-center gap-[10px]">
    <div className="w-auto h-[22px]">
      <p className="sm:block font-satoshi text-[14px]  font-normal leading-[18px]  text-left text-decoration-skip-ink-none">
        Shop
      </p>
    </div>
    <div className="w-[11.5px] h-[6.5px]">
      <IoIosArrowDown />
    </div>
  </div>

  <div className="hidden sm:block w-auto h-[22px]">
    <p className="font-satoshi text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[21.6px] whitespace-nowrap decoration-slice">
      On Sale
    </p>
  </div>

  <div className="hidden sm:block w-auto h-[22px]">
    <p className="font-satoshi text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[21.6px] whitespace-nowrap">
      New Arrivals
    </p>
  </div>

  <div className="hidden lg:block w-auto h-[22px]">
    <p className="font-satoshi text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[21.6px] text-left">
      Brands
    </p>
  </div>

  {/* Search Bar */}
  <div className="flex-1 max-w-[520px] h-[48px] p-[12px_16px] gap-[12px] bg-[rgba(240,240,240,1)] rounded-full flex items-center">
    <IoSearchSharp className="w-[20px] h-[20px] mr-[8px]" />
    <input 
      type="text" 
      placeholder="Search for products..." 
      className="flex-1 font-satoshi text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[21.6px] text-[rgba(0,0,0,0.4)] bg-[rgba(240,240,240,1)] outline-none"
    />
  </div>

  {/* Cart Icon */}
  <div className="w-[24px] h-[24px] flex items-center justify-center gap-[10px]">
    <PiShoppingCartSimple />
  </div>
</div>

{/* Sign-Up Banner */}
<div className="w-full bg-black h-[38px] flex py-[9px]  justify-center  px-4 md:px-[100px] items-center">
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
<li>VERSACE</li><li>ZARA</li><li>GUCCI</li><li>PRADA</li><li>Calvin Klein</li></div>
<Arrivals />
<Customer/>
<Footer/>
</div>
  );
};

