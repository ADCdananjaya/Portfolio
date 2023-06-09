import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import assets from "../assets";
import NavItems from "./navItems";
import NavSocials from "./navSocials";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
        setMenuActive(false);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full h-full relative">
      <dir className="absolute h-96 w-3/5 rounded-full top-5 blur-3xl bg-gradient-to-br to-lighter-gray from-white z-10 opacity-20"></dir>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`w-full h-auto flex fixed top-0 justify-between items-center px-10 py-5 bg-dark-gray text-navy-blue font-poppins ${
          isScrolled && "border border-t-0 border-x-0 shadow-sm z-10"
        }`}
      >
        <Link
          className="font-semibold hover:text-light-blue ease-in-out duration-500 hover:cursor-pointer"
          to="home"
          smooth={true}
          duration={500}
        >
          Chamod
        </Link>
        <NavItems classes="hidden md:flex lg:flex flex-row gap-8" />
        <NavSocials classes="hidden md:flex lg:flex flex-row gap-10" />
        <div className="flex md:hidden lg:hidden">
          <img
            src={!isMenuActive ? assets.menu : assets.cross}
            className="w-5 hover:cursor-pointer object-cover"
            onClick={() => setMenuActive((prev) => !prev)}
          />
        </div>
        <div
          className={`${
            isMenuActive ? "flex" : "hidden"
          } flex-col md:hidden lg:hidden absolute w-40 h-48 bg-lighter-gray top-16 right-5 rounded-md justify-between pt-5 shadow-md sidebar`}
        >
          <NavItems classes="flex items-center md:hidden lg:hidden flex-col gap-3" />
          <NavSocials classes="flex border border-x-0 border-b-0 py-3 md:hidden lg:hidden flex-row gap-10 items-center justify-center" />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
