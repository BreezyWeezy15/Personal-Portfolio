const posts = [
  {
    id: 1,
    title: "Making a design system from scratch",
    date: "12 Feb 2020",
    category: "Design, Pattern",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    title: "Creating pixel perfect icons in Figma",
    date: "12 Feb 2020",
    category: "Figma, Icon Design",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];


type ShowPostsProps = {
  isDark: boolean;
};

export default function ShowRecentPosts( { isDark } : ShowPostsProps) {
  return (
    <section id="posts">
      <div className={`flex flex-col justify-between px-30 py-20 mt-15 ${isDark ? "bg-gray-900" : "bg-blue-100" }`}>
        <div className="flex flex-row justify-between items-center mt-10">
          <h4 className={`${ isDark ? "text-white" : "text-black"} font-bold" `}>Recent posts</h4>
          <h4 className="text-blue-600 font-semibold text-sm">View All</h4>
        </div>

        <div className="flex flex-row mt-5 gap-10">
          {posts.map((e) => (
            <div key={e.id}>
              <div className="flex flex-col bg-white shadow-md p-10 gap-5 rounded-2xl">
                <h4 className="text-black font-bold text-2xl">{e.title}</h4>
                <div className="flex flex-row gap-10">
                  <h4 className="text-black font-semibold">{e.date}</h4>
                  <h4 className="text-black font-semibold">{e.category}</h4>
                </div>

                <h4 className="text-gray-600 font-medium">{e.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
