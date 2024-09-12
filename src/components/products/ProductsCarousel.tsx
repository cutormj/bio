"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Image } from "@nextui-org/react";

const images = [
  "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?",
  "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?",
  "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?",
  "https://images.pexels.com/photos/4937223/pexels-photo-4937223.jpeg?",
  "https://images.pexels.com/photos/4937448/pexels-photo-4937448.jpeg?"
];

export function ProductsCarousel() {
  return (
    <div className="grid place-items-center h-full">
      <Carousel opts={{ align: "start", }} className="w-full h-full max-w-lg">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-52 basis-1/1 md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex py-3 aspect-square items-center justify-center ">
                    <Image src={image} alt={`Product ${index + 1}`} className="w-screen object-cover rounded-sm" isZoomed />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
