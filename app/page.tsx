import Image from "next/image";
import showBanner from "./components/banner";
import showRecentPosts from "./components/posts";
import showRecentWorks from "./components/works";
import showFooter from "./components/footer";



export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row gap-4 text-black font-semibold justify-end px-10 mt-5">
        <h4>Posts</h4>
        <h4>Works</h4>
        <h4>Contact</h4>
      </div>

      <div> {showBanner() }</div>
         
      <div>{ showRecentPosts()}</div>
      
      <div>{ showRecentWorks() }</div>

      <div>{ showFooter() }</div>

      
    </div>
  );
}
