import { SiTicktick } from "react-icons/si";
import HorizontalScroll from "./HorizontalScroll";
import "../styles/customer.css";
import Image from "next/image";

export default function Home() {
  const comments = [
    {
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      image: "/frame5Detail.png",
      author: "Sarah M.",
    },
    {
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      image: "/frame5Detail.png",
      author: "Alex K.",
    },
    {
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      image: "/frame5Detail.png",
      author: "James L.",
    },
    {
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        image: "/frame5Detail.png",
        author: "Samantha D.",
      },
      {
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        image: "/frame5Detail.png",
        author: "Ethan R.",
      },
      {
        text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        image: "/frame5Detail.png" ,
        author: "Liam K.",
      },
  ];

  return (
    <main className="cus">
      <HorizontalScroll heading="OUR HAPPY CUSTOMERS">
        {comments.map((comment, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-80 h-60 border m-2 flex flex-col pt-10 pl-10 text-2xl font-bold rounded-lg"
          >
            {/* Render the image */}
            <Image alt="iuy" height={100} width={100}
              src={comment.image}
              className="review-detail"
            />

            {/* Render the author */}
            <b className="flex items-center mt-2">
              {comment.author} <SiTicktick className="text-green-500 ml-1" />
            </b>

            {/* Render the comment text */}
            <p className="text-sm font-normal text-gray-700 mt-2">{comment.text}</p>
          </div>
        ))}
      </HorizontalScroll>
    </main>
  );
}