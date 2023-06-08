import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="bg-gray-100 h-auto w-full py-5 flex items-center justify-center text-blue-950 font-semibold text-center px-8"
    >
      © 2023 Chamod Dananjaya | Full Stack Web Developer | Sri Lanka
    </motion.div>
  );
};

export default Footer;
