import { userAgent } from "next/server";
import { getUserByUsername, getUsers } from "@/actions/user-action"
import HomeHero from "@/components/(logged-in)/HomeHero";

import React from 'react'
import HomeNavBar from "@/components/(logged-in)/HomeNavBar";
import { Carousel } from "@/components/ui/carousel";
import { ProductsCarousel } from "@/components/products/ProductsCarousel";

async function page({params}: {params: {id: string}}) {

  const user = await getUserByUsername(params.id); 
  console.log("HERE IS THE USER!!",user);
  return (
    <div className="">
      <div className="bg-bgPrimary">
        {/* <HomeNavBar user={user}/> */}
        <HomeHero user={user} />
        <ProductsCarousel />
      </div>
    </div>
  )
}

export default page