import React from 'react';
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

function UserHero() {
  return (
    <section className="relative h-full"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/28269596/pexels-photo-28269596/free-photo-of-a-woman-in-red-sweater-standing-by-a-lake.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-bgPrimary via-transparent to-transparent z-10"></div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-20">
        <div className="grid place-items-center lg:max-w-lg lg:w-full md:w-1/2 w-1/3 mb-10 md:mb-0">
          <Image
            width={100}
            height={100}
            isZoomed={true}
            shadow='md'
            radius='full'
            alt="NextUI hero Image"
            src="https://images.pexels.com/photos/5473962/pexels-photo-5473962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        
        <div className="lg:flex-grow md:w-1/2 lg:pl-0 md:pl-6 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl  font-medium text-white lg:text-4xl md:text-3xl text-2xl">
            Mark Joseph
          </h1>
          <p className="mb-8 leading-relaxed text-white">Hustler</p>
          <div className="flex   items-center justify-center">
            <Button isIconOnly color="primary" variant='flat' aria-label="Like">
              <svg fill="#ffffff" viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
            </Button> 
            <Button isIconOnly color="primary" variant='flat' aria-label="Like">
              <svg fill="#ffffff" viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
            </Button> 
            <Button isIconOnly color="primary" variant='flat' aria-label="Like">
              <svg fill="#ffffff" viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
            </Button> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserHero;
