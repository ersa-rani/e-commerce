'use client'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'
import { IoIosArrowDown } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import Image from "next/image"

export default function ProductReviews() {
  const [activeTab, setActiveTab] = useState("reviews")

  return (
    <div className="w-full lg:w-[1400px] lg:ml-[-100px] mx-auto p-4">
      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="w-full justify-center border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="details"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-sm md:text-base lg:text-lg"
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-sm md:text-base lg:text-lg"
          >
            Rating & Reviews
          </TabsTrigger>
          <TabsTrigger
            value="faqs"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-sm md:text-base lg:text-lg"
          >
            FAQs
          </TabsTrigger>
        </TabsList>
        <div className="flex pt-[30px] gap-[10px]"> <h1 className="w-125px h-32px">Product Reviews</h1><h1 className="w-[33px] h-[11px] ">(451)</h1></div>
        <div className="flex ml-[1000px] mt-[-40px]">
        <button className="w-[48px] h-[48px] lg:rounded-[62px] bg-[#F0F0F0] pl-[15px] hover:bg-black hover:text-white"><GiSettingsKnobs/></button>
        <button className="flex w-[120px] h-[48px] lg:rounded-[62px] bg-[#F0F0F0] pl-[30px] pt-[10px] hover:bg-black hover:text-white"><IoIosArrowDown className="mt-[15px]"/>Latest </button>
        <button className="w-[166px]  h-[48px] lg:rounded-[62px] bg-[#F0F0F0] hover:bg-black hover:text-white">Write a Review</button>
        </div>
        <TabsContent value="reviews" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReviewCard
              name="Samantha D."
              date="Posted on August 14, 2023"
              rating={4}
              comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
            />
            <ReviewCard
              name="Alex M."
              date="Posted on August 15, 2023"
              rating={4}
              comment="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."

            />
            <ReviewCard
              name="Liam K."
              date="Posted on August 18, 2023"
              rating={4}
              comment="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."

            />
            <ReviewCard
              name="Ava H."
              date="Posted on August 19, 2023"
              rating={5}
              comment="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."

            />
            <ReviewCard
              name="Ethan R."
              date="Posted on August 16, 2023"
              rating={3}
              comment="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."

            />
            <ReviewCard
              name="Olivia P."
              date="Posted on August 17, 2023"
              rating={4}
              comment="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."

            />
          </div>
        </TabsContent>
      </Tabs>
        <button className="w-[166px] h-[48px] lg:rounded-[62px] border-[1px] hover:bg-black hover:text-white mt-[50px] sm:ml-[10px]">Load More Reviews</button>
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">YOU MIGHT ALSO LIKE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg"
                    alt={`Product ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Related Product {item}</h3>
                  <div className="flex items-center mt-2">
                    <StarRating rating={4} />
                    <span className="text-sm text-muted-foreground ml-2">
                      (24 reviews)
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function ReviewCard({ name, date, rating, comment }: {
  name: string
  date: string
  rating: number
  comment: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <StarRating rating={rating} />
            <div className="flex items-center gap-2 mt-2 mb-1">
              <span className="font-medium">{name}</span>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-500">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>
            <p className="mt-2 text-sm">{comment}</p>
            <p className="text-sm text-muted-foreground mt-1">{date}</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 self-start">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
            </svg>
            <span className="sr-only">More options</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}