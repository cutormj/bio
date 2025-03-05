import { userAgent } from "next/server";
import { getUserByUsername, getUsers } from "@/actions/user-action"
import UserHero from "@/components/UserHero";
import { ProductsCarousel } from "@/components/products/ProductsCarousel";


async function page({params}: {params: {id: string}}) {

  const user = await getUserByUsername(params.id); 
  console.log("HERE IS THE USER!!",user);
  return (
    <div className="theme-default">
      <div className="bg-bgPrimary">
        {/* <HomeNavBar user={user}/> */}
        <UserHero />
        <ProductsCarousel/>
      </div>
    </div>
  )
}

export default page