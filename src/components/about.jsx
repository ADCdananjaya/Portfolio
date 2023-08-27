import { motion } from "framer-motion";
import { textContainer, fadeIn } from "../utils/motion";
import AboutItems from "./aboutItems";

const About = () => {
  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="about"
      className="w-full h-auto items-center md:items-start lg:items-start flex flex-col gap-3 px-0 md:px-20 mt-5 font-poppins bg-lighter-gray dark:bg-navy-blue"
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="text-4xl md:text-5xl lg:text-5xl text-navy-blue dark:text-light-gray font-semibold"
      >
        about.
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="w-10/12 text-lg text-center md:text-start lg:text-start md:text-lg lg:text-lg text-navy-blue dark:text-light-gray md:w-9/12 lg:w-9/12"
      >
        I'm pursuing a BICT degree in software systems at the University of
        Kelaniya, expanding my knowledge of software development principles.
        Through practical projects, I'm honing my problem-solving and
        collaborative skills to create innovative solutions.
      </motion.p>
      <AboutItems />
    </motion.div>
  );
};

export default About;
