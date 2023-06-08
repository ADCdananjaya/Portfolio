import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { projects } from "../constants/const";
import assets from "../assets";

const WorkItems = () => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-8 justify-center mt-5">
      {projects.map((item, index) => (
        <motion.div
          variants={fadeIn("right", "spring", (index + 1) * 0.5, 0.75)}
          key={item.id}
          className="group w-80 md:w-82 lg:w-82 h-auto bg-gray-100 hover:shadow-lg shadow-md py-3 rounded-md flex flex-col px-5 text-blue-950 font-poppins"
        >
          <div className="relative flex items-center justify-center">
            <img
              src={item.image}
              className="w-auto h-auto object-cover rounded-lg "
            />
            <div className="absolute inset-0 bg-black rounded-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-0"></div>
            <div className="absolute opacity-0 group-hover:opacity-100 flex flx-row gap-5">
              <img
                src={assets.live}
                className="w-10 object-cover hover:cursor-pointer hover:opacity-75"
                onClick={() => window.open(item.live, "_blank")}
              />
              <img
                src={assets.code}
                className="h-10 object-cover hover:cursor-pointer hover:opacity-75"
                onClick={() => window.open(item.code, "_blank")}
              />
            </div>
          </div>
          <div className="mt-1 flex flex-col gap-4 md:gap-1 lg:gap-1">
            <p className="text-sm italic">{item.date}</p>
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-md text-start">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkItems;
