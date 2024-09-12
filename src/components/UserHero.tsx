import React from 'react';
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

function UserHero() {
  return (
    <section className="relative h-full"
      style={{
        backgroundImage: "url('https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10"></div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-20">
        <div className="grid place-items-center lg:max-w-lg lg:w-full md:w-1/2 w-1/3 mb-10 md:mb-0">
          <Image
            width={300}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </div>
        
        <div className="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-6 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl mb-4 font-medium text-white lg:text-4xl md:text-3xl text-2xl">
            Mark Joseph
          </h1>
          <p className="mb-8 leading-relaxed text-white">Hustler</p>
          <div className="flex justify-center">
            <Button color='primary' variant='solid' className="relative z-30">Follow</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserHero;
