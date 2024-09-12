import { userAgent } from "next/server";
import { getUserByUsername, getUsers } from "@/actions/user-action"
import UserHero from "@/components/UserHero";
import SampleHero from "@/components/SampleHero";

import React from 'react'
import HomeNavBar from "@/components/(logged-in)/HomeNavBar";
import ProductsCarousel from "@/components/products/products";

async function page({params}: {params: {id: string}}) {

  const user = await getUserByUsername(params.id); 
  console.log("HERE IS THE USER!!",user);
  return (
    <div className="theme-cool">
      <div className="bg-bgPrimary">
        {/* <HomeNavBar user={user}/> */}
        <UserHero />
        <ProductsCarousel />
      </div>
    </div>
  )
}

export default page