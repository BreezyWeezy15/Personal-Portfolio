
const mediaImage = [
  "./facebook.png",
  "./instagram.png",
  "./linkedin.png",
  "./twitter.png"
];

export default function showFooter() {
  return (
    <footer className="px-30 py-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row gap-5 justify-center items-center">
          {mediaImage.map((image) => (
            <img src={image} width={25} height={25} />
          ))}
        </div>

        <h4 className="text-gray-700 font-medium text-sm">
          {" "}
          Copyright ©2020 All rights reserved{" "}
        </h4>
      </div>
    </footer>
  );
}
