// import { Button } from "@/ui/button"
import { ProductGallery } from "../components/product-gallery"
import { ColorSelector } from "../components/color-selector"
import { StarRating } from "../components/star-rating"
import { MdKeyboardArrowRight } from "react-icons/md"
import ProductReviews from "../components/product-reviews"


const productImages = [
  {
    src: "/shirt-1.png",
    alt: "Product image 1"
  },
  {
    src: "/shirt-2.png",
    alt: "Product image 2"
  },
  {
    src: "/shirt-3.png",
    alt: "Product image 3"
  },
  
]

const productColors = [
  { name: "Black", value: "#4F4631" },
  { name: "Navy", value: "#314F4A" },
  { name: "Gray", value: "#31344F" }
]

export default function ProductDetail() {
  return (
    <div className="mx-auto mt-[200px] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <hr className=' w-[300px] lg:w-[1240px] mt-[-100px] pb-[20px]'/>
         <p className='pb-[15px] flex lg:flex lg:pb-[20px]'> home < MdKeyboardArrowRight className="size-[30px]"/> Shop <MdKeyboardArrowRight className="size-[30px]"/>Men< MdKeyboardArrowRight className="size-[30px]"/> T-Shirt</p> 
      <div className="grid gap-8 lg:grid-cols-2">
        
        <ProductGallery images={productImages} />
        <div className="flex flex-col gap-6">
          
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <StarRating rating={4} />
              <span className="text-sm text-gray-500">4.5/5</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">$260</span>
            <span className="text-lg text-gray-500 line-through">$300</span>
            <b className="off">-40%</b>
          </div>
          <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
          <div>
            <hr className="w-[590px]"/>
            <h2 className="text-sm font-medium text-gray-900 p-[10px]">Select Colors</h2>
            <ColorSelector colors={productColors} />
          </div>
          <hr className="w-[590px]"/>
        
        <h2 className="text-sm font-medium text-gray-900 ">Choose Size</h2>
        <div className="space-x-3 "><button className="w-[86px] h-[46px] lg:rounded-[62px] bg-[#F0F0F0] hover:bg-black hover:text-white">Small</button>
        <button className="w-[86px] h-[46px] lg:rounded-[62px] bg-[#F0F0F0] hover:bg-black hover:text-white">Medium</button>
        <button className="w-[86px] h-[46px] lg:rounded-[62px] bg-[#F0F0F0] hover:bg-black hover:text-white">Large</button>
        <button className="w-[86px] h-[46px] lg:rounded-[62px] bg-[#F0F0F0] hover:bg-black hover:text-white mb-[20px]">x-Large</button>
        <hr className="w-[590px] "/></div>
        <div className="space-x-3 ">
        <button className="w-[170px] h-[46px] lg:rounded-[62px] bg-[#F0F0F0] hover:bg-black hover:text-white">- 1 +</button>
         <button className="w-[400px] h-[46px] lg:rounded-[62px] bg-[#F0F0F0] hover:bg-black hover:text-white">Add to cart</button>
        </div>
        </div>  
      </div>
      <ProductReviews/>
    </div>
  )
}