import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="bg-light-gray dark:bg-light-blue h-auto w-full py-5 flex items-center justify-center text-navy-blue dark:text-light-gray font-semibold text-center px-8"
    >
      © 2023 Chamod Dananjaya | Full Stack Web Developer | Sri Lanka
    </motion.div>
  );
};

export default Footer;
