"use client"
import * as React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Image } from "@nextui-org/image";

// Updated images array with titles
const products = [
  {
    url: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?",
    title: "Cool",
  },
  {
    url: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?",
    title: "Party",
  },
  {
    url: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?",
    title: "Elegant",
  },
  {
    url: "https://images.pexels.com/photos/4937223/pexels-photo-4937223.jpeg?",
    title: "Simple",
  },
  {
    url: "https://images.pexels.com/photos/4937448/pexels-photo-4937448.jpeg?",
    title: "Creative",
  },
];

export function ProductsCarousel() {
  return (
    <div className="grid bg-primary place-items-center h-full">
      <Carousel opts={{ align: "start" }} className="px-2 w-52 md:w-full lg:w-full h-full max-w-lg">
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="w-52 basis-1/1 md:basis-1/3 lg:basis-1/4">
              <div className="">
                <Card className="">
                  <CardContent className="flex py-1 aspect-square items-center justify-center">
                    <Image
                      src={product.url}
                      alt={product.title}
                      className="w-screen object-cover rounded-sm"
                      isZoomed
                    />
                  </CardContent>
                  <CardTitle className="text-secondary text-center text-2xl sm:text-3xl md:text-2xl lg:text-xl">{product.title}</CardTitle>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
