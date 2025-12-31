const works = [
  {
    id: 1,
    title: "Designing Dashboards",
    year: "2020",
    image: "./image1.png",
    category: "Dashboard",
    overview:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    image: "./image2.png",
    category: "Illustration",
    overview:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    title: "36 Days of Malayalam type",
    year: "2018",
    image: "./image3.png",
    category: "Typography",
    overview:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];


type ShowWorksProps = {
  isDark : boolean;
};

export default function ShowRecentWorks( { isDark } : ShowWorksProps ) {
  return (
    <section id="works">
      <div className="flex flex-col px-30 mt-30 ">
        <h4 className={`${ isDark ? "text-white" : "text-black"} text-2xl font-semibold mb-6"`}>
          Featured Works
        </h4>

        <div className="flex flex-col">
          {works.map((e) => (
            <div key={e.id} className="flex flex-col">
              {/* Work item */}
              <div className="flex flex-row mt-10">
                <img
                  src={e.image}
                  width={250}
                  height={200}
                  alt={e.title}
                  className="rounded-lg object-cover"
                />

                <div className="flex flex-col gap-5 p-5">
                  <h4 className={`${ isDark ? "text-white" : "text-black"} font-semibold text-3xl"`}>
                    {e.title}
                  </h4>

                  <div className="flex flex-row items-center gap-5">
                    <span className="text-white font-semibold rounded-2xl bg-blue-900 px-4 py-1">
                      {e.year}
                    </span>
                    <span className="text-black font-semibold text-lg">
                      {e.category}
                    </span>
                  </div>

                  <p className="text-gray-500 font-medium">{e.overview}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-b border-gray-300 mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
