"use client";
import Image from "next/image";
import ShowBanner from "./components/banner";
import ShowRecentPosts from "./components/posts";
import ShowRecentWorks from "./components/works";
import ShowFooter from "./components/footer";
import { useState } from "react";
export default function Home() {
  const [checked, setChecked] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={`flex flex-col min-h-screen ${checked ? "bg-black" : "bg-white"}`}>
      <div className="flex flex-row justify-between px-10 mt-5 items-center">
        <div
          onClick={() => {
            if (checked) { setChecked(false); } else { setChecked(true); }
          }}
          className="rounded-full bg-gray-400 w-[40] h-[40] flex items-center justify-center"
        >
          {checked ? (
            <img src="./night.png" width={20} height={20} />
          ) : (
            <img src="./day.png" width={20} height={20} />
          )}
        </div>
        <div className={`flex flex-row gap-4 ${ checked ? "text-white" : "text-black"} font-semibold justify-end`}>
          <h4
            onClick={() => scrollToSection("posts")}
            className="cursor-pointer"
          >
            Posts
          </h4>
          <h4
            onClick={() => scrollToSection("works")}
            className="cursor-pointer"
          >
            Works
          </h4>
          <h4
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            Contact
          </h4>
        </div>
      </div>

      <ShowBanner isDark={checked}/>

      <ShowRecentPosts isDark={checked}/>

      <ShowRecentWorks isDark={checked} />

      <ShowFooter isDark={checked}/>
    </div>
  );
}
