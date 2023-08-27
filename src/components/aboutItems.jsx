import { motion } from "framer-motion";
import { textContainer, fadeIn } from "../utils/motion";
import { aboutConsts } from "../constants/const";

const AboutItems = () => {
  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col text-navy-blue dark:text-light-gray font-poppins gap-2 md:gap-8 lg:gap-0"
    >
      {aboutConsts.map((item, index) => (
        <motion.div
          variants={fadeIn("up", "tween", index * 0.5, 1)}
          key={item.id}
          className="flex flex-col md:flex-row lg:flex-row items-center"
        >
          <img
            src={item.imageLight}
            className="w-60 object-cover dark:hidden"
          />
          <img
            src={item.imageDark}
            className="hidden w-36 object-cover opacity-90 dark:block"
          />
          <ul className="flex flex-col items-center md:items-start lg:items-start gap-3">
            <li className="text-xl font-semibold list-disc list-inside text-center md:text-start lg:text-start w-11/12 md:w-auto lg:w-auto">
              {item.title}
            </li>
            <ul className="w-10/12 md:w-full md:pl-8 lg:pl-8 flex flex-col items-center md:items-start lg:items-start gap-2">
              {item.descriptions.map((des) => (
                <li
                  key={des.id}
                  className="text-md md:list-disc lg:list-disc text-center md:text-start lg:text-start list-inside"
                >
                  {des.value}
                </li>
              ))}
            </ul>
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutItems;
