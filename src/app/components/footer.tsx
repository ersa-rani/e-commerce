import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/footer.css"
import Image from "next/image";

export default function Footer(){
  return (
    
    <div className="footer-bg">
          <div className="update-bg"><p className="update-head">STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
    <div className="inline"><div className="update-email mb-3"><input type="email" placeholder="Enter your email address"/></div>
    <div className="subscribe-button"><button>Subscribe to Newsletter</button></div></div>


    </div>
    <div className="footer-detail-layout">
    <h1 className="footer-logo">SHOP.CO</h1>
    <p className="footer-para">We have clothes that suits your style and which you’re proud to wear. From women to men. </p>
    </div>

    <ul className="footer-list">
      <h1 className="footer-index">COMPANY</h1>
     
        <li>About</li>
        <li>Features</li>
        <li>Works</li>
        <li>Career</li>
      </ul>
    

    <ul className="footer-list"style={{marginLeft:700, marginTop:-175}}>
      <h1 className="footer-index">HElP</h1>
        <li>Customer Support</li>
        <li>Deliver Details</li>
        <li>Term & Conditions</li>
        <li>Privacy Policy</li>
      </ul>

      <ul className="footer-list-2"style={{marginLeft:950, marginTop:-180 }}>
      <h1 className="footer-index">FAQ</h1>
        <li>Account</li>
        <li>Manage Deliveries</li>
        <li>Orders</li>
        <li>Payments</li>
      </ul>

       <ul className="footer-list-2"style={{marginLeft:1150, marginTop:-180}}>
      <h1 className="footer-index">RESOURCES</h1>
        <li>Free Books</li>
        <li>Development Tutorials</li>
        <li>How to -Blogs</li>
        <li>Youtube Playlist</li>
      </ul>
    
    <FaTwitter style={{width:28, height:28, marginLeft:100}}/>
    <FaFacebook style={{width:28, height:28, marginTop:-25 , marginLeft:150}}/>
    < FaInstagram  style={{width:28, height:28, marginTop:-28 , marginLeft:200}}/>
    <  FaGithub  style={{width:28, height:28, marginTop:-28, marginLeft:250}}/>

    <hr className="mt-10 "/>
    <p className="info">Shop.co © 2000-2021, All rights reserved
  
    <Image height={100} width={100} src="/visa.png" alt="card" className="payment" style={{marginLeft:955, marginTop:-25}}/>
    <Image height={100} width={100} src="/master.png" alt="card" className="payment" style={{marginLeft:1035, marginTop:-30}}/>
    <Image height={100} width={100} src="/paypal.png" alt="card" className="payment" style={{marginLeft:1110, marginTop:-30}}/>
    <Image height={100} width={100} src="/pay.png" alt="card" className="payment" style={{marginLeft:1180, marginTop:-30}}/>
    <Image height={100} width={100} src="/G pal.png" alt="card" className="payment" style={{marginLeft:880, marginTop:-30}}/>
    </p>
   </div>

   
  )
}