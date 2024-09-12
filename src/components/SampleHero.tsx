// components/Hero.js
import {Image} from "@nextui-org/image";
import { Button } from '@nextui-org/react';

const SampleHero = () => {
  return (
    <div
      className="relative h-full"
      style={{
        backgroundImage: "url('https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-20  items-center justify-center h-full mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        
        <div className="grid place-items-center lg:max-w-lg lg:w-full md:w-1/2 w-1/3 mb-10 md:mb-0">
          {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
          <Image
              width={300}

              alt="NextUI hero Image"
              src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-6 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1 className="title-font sm:text-4xl  mb-4 font-medium text-primary lg:text-4xl md:text-3xl text-2xl">
                Before they sold out ready made gluten
            </h1>
            <p className="mb-8 leading-relaxed text-secondary">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
                <Button color='primary' variant='ghost'>Follow</Button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SampleHero;
