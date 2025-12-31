"use client";
const mediaInfo = [
  {
    id: 1,
    image: "./facebook.png",
    link: "https://www.facebook.com/"
  },
  {
    id: 2,
    image: "./instagram.png",
    link: "https://www.instagram.com/"
  },
  {
    id: 3,
    image: "./linkedin.png",
    link: "https://www.linkedin.com/feed/"
  },
  {
    id: 4,
    image: "./twitter.png",
    link: "https://x.com/"
  },
];


type ShowFootersProps = {
   isDark: boolean;
};

export default function ShowFooter( { isDark } : ShowFootersProps ) {
  return (
    <footer id="contact" className="px-30 py-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row gap-5 justify-center items-center">
          {mediaInfo.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={info.image}
                width={25}
                height={25}
                className="cursor-pointer"
                alt={`Link to ${info.link}`}
              />
            </a>
          ))}
        </div>

        <h4 className={`${ isDark ? "text-white" : "text-gray-800"} font-medium text-sm" `}>
          Copyright ©2020 All rights reserved
        </h4>
      </div>
    </footer>
  );
}
