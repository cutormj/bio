import { userAgent } from "next/server";
import { getUserByUsername, getUsers } from "@/actions/user-action"
import HomeHero from "@/components/(logged-in)/HomeHero";

import React from 'react'

async function page({params}: {params: {id: string}}) {

  const user = await getUserByUsername(params.id); 
  console.log("HERE IS THE USER!!",user);
  return (
    <div className="theme-maink">
      <div className="bg-bgPrimary">
        <HomeHero />
      </div>
    </div>
  )
}

export default page