import assets from "../assets";
import Technologies from "./technologies";

const HeroSection = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = assets.resume;
    link.download = "chamod dananjaya.pdf";
    link.click();
  };

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row lg:flex-row justify-between items-center w-full h-auto bg-sky-50 text-blue-950 px-10 pt-16"
    >
      <div className="w-8/12 h-auto flex flex-col justify-center items-center md:items-start lg:items-start gap-5">
        <div className="flex flex-col mt-5 md:mt-5 lg:mt-0 gap-1 w-auto md:pl-14 lg:pl-14">
          <p className="font-poppins text-center md:text-start lg:text-start text-xl md:pl-2 lg:pl-2">
            Hello, I'm Chamod,
          </p>
          <p className="text-5xl text-center md:text-start lg:text-start md:text-6xl lg:text-8xl font-bold">
            Full-stack web developer
          </p>
          <p className="font-poppins text-center mt-2  md:text-start lg:text-start text-xl md:pl-2 lg:pl-2">
            based in Sri Lanka.
          </p>
        </div>
        <Technologies />
        <div className="flex items-center md:text-start lg:text-start md:pl-14 lg:pl-14">
          <button
            onClick={handleClick}
            className="font-poppins font-semibold hover:bg-gray-50 bg-white rounded-full px-5 py-2 shadow-md"
          >
            Resume
          </button>
        </div>
      </div>
      <img
        src={assets.chamod}
        className="object-cover h-full w-[300px] md:w-[550px] lg:w-[550px]"
      />
    </div>
  );
};

export default HeroSection;
