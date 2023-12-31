import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { technologies } from "../constants/const";

const Technologies = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center md:justify-start lg:justify-start md:items-start lg:items-start gap-5 md:pl-14 lg:pl-14">
      {technologies.map((item, index) => (
        <motion.div
          variants={fadeIn("up", "spring", (index + 1) * 0.5, 0.75)}
          key={item.id}
          className="flex items-center justify-center hover:bg-lighter-gray bg-light-gray rounded-3xl w-12 md:w-16 lg:w-16 h-12 md:h-16 lg:h-16 shadow-md hover:cursor-pointer ease-in-out duration-200"
          onClick={() => window.open(item.url, "_blank")}
        >
          <img
            src={item.image}
            className={`${
              item.id === 3 ? "h-8 md:h-12 lg:h-12" : "w-8 md:w-12 lg:w-12"
            } object-cover`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Technologies;
