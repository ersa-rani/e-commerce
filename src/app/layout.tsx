import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full max-w-[1340px] h-[41px] flex items-center absolute top-[62px] left-0 md:left-[100px] gap-[20px] md:gap-[40px] px-4 md:px-0">
  {/* Logo */}
  <div className="w-auto h-[22px]">
    <p className="font-integral-cf text-[24px] md:text-[32px] font-extrabold leading-[28px] md:leading-[38.4px] text-left decoration-slice">
      SHOP.CO
    </p>
  </div>

  {/* Navigation Links */}
  <div className="flex items-center gap-[10px]">
    <div className=" hidden sm:block w-auto h-[22px]">
   <p className="sm:block font-satoshi text-[14px]  font-normal leading-[18px]  text-left text-decoration-skip-ink-none">
   <Link href="/product.detail">  Shop</Link>
      </p>
    </div>
    <div className=" hidden sm:block w-[11.5px] h-[6.5px]">
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
  <div className=" flex-1 max-w-[520px] h-[48px] p-[12px_16px] gap-[12px] bg-[rgba(240,240,240,1)] rounded-full flex items-center">
    <IoSearchSharp className="w-[20px] h-[20px] ml-[8px] " />
    <input 
      type="text" 
      placeholder="Search for products..." 
      className=" flex-1 font-satoshi text-[14px] md:text-[16px] font-normal leading-[18px] md:leading-[21.6px] text-[rgba(0,0,0,0.4)] bg-[rgba(240,240,240,1)] outline-none"
    />
  </div>

  {/* Cart Icon */}
  <div className="w-[24px] h-[24px] flex items-center justify-center gap-[10px] ml-[100px] lg-ml-[2000]">
    <PiShoppingCartSimple />
  </div>
</div>

        {children}
      </body>
    </html>
  );
}
