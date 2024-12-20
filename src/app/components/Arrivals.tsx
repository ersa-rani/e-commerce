import Image from 'next/image'
import React from 'react'

function Arrivals() {
  return (
    <div>
    <h1 className="new-arrivals">NEW ARRIVALS</h1>
    <div >
      <Image height={100} width={100} src="/frame1.png" alt="product"className="product1"/><p className="product-1-price">$120</p>
      <Image height={100} width={100} src="/frame1Detail.png" alt="Details"className="product1Detail"/>
      <Image height={100} width={100} src="/frame2.png" alt="product"className="product2"/>
      <Image height={100} width={100} src="/frame2Detail.png" alt="Details"className="product2Detail"/><p className="product-2-price">$240 <s>$260</s><b className="off">-20%</b></p>
      <Image height={100} width={100} src="/frame3.png" alt="product"className="product3"/>
      <Image height={100} width={100} src="/frame1Detail.png" alt="Details"className="product3Detail"/><p className="product-3-price">$180</p>
      <Image height={100} width={100} src="/frame4.png" alt="product"className="product4"/>
      <Image height={100} width={100} src="/frame1Detail.png" alt="Details"className="product4Detail"/><p className="product-4-price">$130<s>$160</s><b className="off">-30%</b></p>
    </div><button className="view-button">View All</button><hr className="horizontal"/>
    <h1 className="top-selling">Top Selling</h1>
    <Image height={100} width={100} src="/frame5.png" alt="product"className="product5"/><p className="product-5-price">$212 <s> $232</s> <b className="off">-20%</b
    ></p>
    <Image height={100} width={100} src="/frame5Detail.png" alt="Details"className="product5Detail"/>
    <Image height={100} width={100} src="/frame6.png" alt="product"className="product6"/>
    <Image height={100} width={100} src="/frame6Detail.png" alt="Details"className="product6Detail"/><p className="product-6-price">$145</p>
    <Image height={100} width={100} src="/frame7.png" alt="product"className="product7"/>
    <Image height={100} width={100} src="/frame7Detail.png" alt="Details"className="product7Detail"/><p className="product-7-price">$80</p>
    <Image height={100} width={100} src="/frame8.png" alt="product"className="product8"/>
     <Image height={100} width={100} src="/frame2Detail.png" alt="Details"className="product8Detail"/><p className="product-8-price">$120</p>
     <button className="view-2">View All</button>
    <div className="browse">
      <h1 className="brawse-heading">BROWSE BY DRESS STYLE</h1>
    <Image height={300} width={300} src="/browse1.png" alt="product"className="browse1"/>
    <Image height={300} width={300} src="/browse2.png" alt="product"className="browse2"/>
    <Image height={300} width={300} src="/browse3.png" alt="product"className="browse3"/>
    <Image height={300} width={300} src="/browse4.png" alt="product"className="browse4"/>
    </div>
      
</div>
  )
}

export default Arrivals