import AboutItems from "./aboutItems";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-auto items-center md:items-start lg:items-start flex flex-col gap-3 px-20 mt-5 font-poppins"
    >
      <p className="text-4xl md:text-5xl lg:text-5xl text-blue-950 font-semibold">
        about.
      </p>
      <p className="text-lg text-center md:text-start lg:text-start md:text-lg lg:text-lg text-blue-950 md:w-9/12 lg:w-9/12">
        I'm pursuing a BICT degree in software systems at the University of
        Kelaniya, expanding my knowledge of software development principles.
        Through practical projects, I'm honing my problem-solving and
        collaborative skills to create innovative solutions.
      </p>
      <AboutItems />
    </div>
  );
};

export default About;
