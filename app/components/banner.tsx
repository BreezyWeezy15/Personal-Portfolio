


export default function ShowBanner(){
    return (
      <section id="banner">

         <div className="flex flex-row justify-between px-30 mt-15 items-center">
        <div className="flex flex-col gap-7">
          <h4 className="text-black font-bold text-4xl">
            Hi, I am John, <br /> Creative Technologist
          </h4>
          <h4 className="text-gray-800 font-medium text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet{" "}
            <br /> sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam <br /> consequat sunt nostrud amet.
          </h4>
          <button className="bg-orange-500 w-fit p-2 rounded-lg">
            Download Resume
          </button>
        </div>

        <img
          src="./profile.png"
          width={350}
          height={350}
          className="object-cover"
        />
      </div>

      </section>
    );
}