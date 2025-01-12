'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProductImage {
  src: string
  alt: string
}

interface ProductGalleryProps {
  images: ProductImage[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-[80px_1fr] gap-4">
      <div className="flex flex-row md:flex-col justify-center gap-4 mt-4 md:mt-0">
    
        {images.slice(0, 3).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative w-[152px] left-[-90px] aspect-square overflow-hidden rounded-lg border",
              selectedImage === index && "ring-2 ring-blue-500"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <div className="relative aspect-square overflow-hidden rounded-lg w-[370px] h-[270px] lg:w-[450px] lg:h-[530px]">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}