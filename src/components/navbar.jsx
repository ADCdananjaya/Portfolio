import { useState, useEffect } from "react";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
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
    <nav
      className={`w-full h-auto flex fixed top-0 z-10 justify-between items-center px-10 py-5 bg-sky-50  text-blue-900 font-poppins ${
        isScrolled && "border border-t-0 border-x-0 shadow-sm"
      }`}
    >
      <a
        href="#"
        className="font-semibold hover:text-blue-700 ease-in-out duration-500"
      >
        Chamod
      </a>
      <NavItems classes="hidden md:flex lg:flex flex-row gap-8" />
      <NavSocials classes="hidden md:flex lg:flex flex-row gap-10" />
      <div className="flex md:hidden lg:hidden">
        <img
          src={!isMenuActive ? menu : cross}
          className="w-5 hover:cursor-pointer object-cover"
          onClick={() => setMenuActive((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          isMenuActive ? "flex" : "hidden"
        } flex-col md:hidden lg:hidden absolute w-40 h-48 bg-white top-16 right-5 rounded-md justify-between pt-5 shadow-md`}
      >
        <NavItems classes="flex items-center md:hidden lg:hidden flex-col gap-3" />
        <NavSocials classes="flex border border-x-0 border-b-0 py-3 md:hidden lg:hidden flex-row gap-10 items-center justify-center" />
      </div>
    </nav>
  );
};

export default Navbar;
