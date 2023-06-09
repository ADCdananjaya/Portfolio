import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  textContainer,
  textVariant2,
} from "../utils/motion";
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="home"
      className="flex flex-col md:flex-row lg:flex-row justify-between items-center w-full h-auto bg-dark-gray text-navy-blue px-10 pt-16"
    >
      <div className="w-8/12 h-auto flex flex-col justify-center items-center md:items-start lg:items-start gap-5">
        <div className="flex flex-col mt-5 md:mt-5 lg:mt-0 gap-1 w-auto md:pl-14 lg:pl-14">
          <motion.p
            variants={fadeIn("down", "tween", 0.1, 1)}
            className="font-poppins text-center md:text-start lg:text-start text-xl md:pl-2 lg:pl-2"
          >
            Hello, I'm Chamod,
          </motion.p>
          <motion.p
            variants={textContainer}
            className="text-5xl text-center md:text-start lg:text-start md:text-6xl lg:text-8xl font-bold"
          >
            {Array.from("Full-stack web developer").map((letter, index) => (
              <motion.span variants={textVariant2} key={index}>
                {letter}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            variants={textContainer}
            className="font-poppins text-center mt-2  md:text-start lg:text-start text-xl md:pl-2 lg:pl-2"
          >
            {Array.from("based in Sri Lanka.").map((letter, index) => (
              <motion.span variants={textVariant2} key={index}>
                {letter}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <Technologies />
        <div className="flex items-center md:text-start lg:text-start md:pl-14 lg:pl-14">
          <motion.button
            variants={fadeIn("up", "tween", 0.1, 1)}
            onClick={handleClick}
            className="font-poppins font-semibold hover:bg-lighter-gray bg-light-gray rounded-full px-5 py-2 shadow-md"
          >
            Resume
          </motion.button>
        </div>
      </div>
      <motion.img
        variants={fadeIn("up", "tween", 0.1, 1)}
        src={assets.chamod}
        className="object-cover h-full w-[300px] md:w-[550px] lg:w-[550px]"
      />
    </motion.div>
  );
};

export default HeroSection;
