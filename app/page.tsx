"use client";
import Image from "next/image";
import ShowBanner from "./components/banner";
import ShowRecentPosts from "./components/posts";
import ShowRecentWorks from "./components/works";
import ShowFooter from "./components/footer";



export default function Home() {

  const scrollToSection = (id : string) => {
     document.getElementById(id)?.scrollIntoView({
      behavior : "smooth"
     })
  }


  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row gap-4 text-black font-semibold justify-end px-10 mt-5">
        <h4  onClick={ () => scrollToSection("posts")} className="cursor-pointer">Posts</h4>
        <h4  onClick={ () => scrollToSection("works")} className="cursor-pointer">Works</h4>
        <h4  onClick={ () => scrollToSection("contact")} className="cursor-pointer">Contact</h4>
      </div>

      <ShowBanner />
         
      <ShowRecentPosts />
      
      <ShowRecentWorks />

      <ShowFooter />
    </div>
  );
}
