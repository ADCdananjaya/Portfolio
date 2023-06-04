import assets from "../assets";
import Technologies from "./technologies";

const HeroSection = () => {
  return (
    <div className="flex flex-row justify-between items-center-w-full h-auto bg-sky-50 text-blue-950 px-10 pt-16">
      <div className="w-8/12 h-auto flex flex-col justify-center items-start gap-5">
        <div className="flex flex-col gap-1 w-auto pl-14">
          <p className="font-poppins text-xl pl-2">Hello, I'm Chamod,</p>
          <p className="text-8xl font-bold">Full-stack web developer</p>
          <p className="font-poppins text-xl pl-2">based in Sri Lanka.</p>
        </div>
        <Technologies />
        <div className="flex pl-14">
          <button className="font-poppins font-semibold hover:bg-gray-50 bg-white rounded-full px-5 py-2 shadow-md">
            Resume
          </button>
        </div>
      </div>
      <img src={assets.chamod} className="object-cover h-full w-[550px]" />
    </div>
  );
};

export default HeroSection;
