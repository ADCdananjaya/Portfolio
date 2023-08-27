import { motion } from "framer-motion";
import { textContainer, fadeIn } from "../utils/motion";
import WorkItems from "./workItems";

const WorkSection = () => {
  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="work"
      className="w-full h-auto items-center md:items-start lg:items-start flex flex-col gap-3 px-0 md:px-20 pt-10 font-poppins bg-lighter-gray dark:bg-navy-blue"
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="text-4xl md:text-5xl lg:text-5xl text-navy-blue dark:text-light-gray font-semibold"
      >
        work.
      </motion.p>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="w-10/12 text-lg text-center md:text-start lg:text-start md:text-lg lg:text-lg text-navy-blue dark:text-light-gray md:w-9/12 lg:w-9/12"
      >
        The below projects showcase my expertise as a Full Stack Web Developer.
        With captivating designs and robust functionality, I consistently exceed
        client expectations. From concept to deployment, I bring visions to life
        with top-notch solutions.
      </motion.p>
      <WorkItems />
    </motion.div>
  );
};

export default WorkSection;
