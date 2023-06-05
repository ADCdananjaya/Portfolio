import AboutItems from "./aboutItems";

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-3 px-20 mt-5 font-poppins">
      <p className="text-5xl text-blue-950 font-semibold">about</p>
      <p className="text-xl text-blue-950 w-9/12">
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
