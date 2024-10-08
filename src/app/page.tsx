
import SampleTheme from "@/components/SampleTheme";
import SocialLogins from "@/components/SocialLogins";
export default function Home() {

  return (
    <div className="theme-mint">
      <section className="bg-bgPrimary body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">Everything you are. In one, simple link in bio.
              <span className="hidden lg:inline-block">readymade gluten</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Join 50M+ people using Linktree for their link in bio. 
              One link to help you share everything you create, 
              curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>
            <div className="flex justify-center">
              <SocialLogins/>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
          </div>
        </div>
      </section>
    </div>
  );
}
