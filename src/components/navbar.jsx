import { useState, useEffect } from "react";
import constants from "../constants/const";
import { socialLinks } from "../assets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full h-auto flex fixed top-0 justify-between items-center px-10 py-5 bg-sky-50  text-blue-900 font-poppins ${
        isScrolled && "border border-t-0 border-x-0"
      }`}
    >
      <a
        href="#"
        className="font-semibold hover:text-blue-700 ease-in-out duration-500"
      >
        Chamod
      </a>
      <div className="flex flex-row gap-8">
        {constants.navItems.map((item) => (
          <a
            className="hover:text-blue-700 ease-in-out duration-500"
            href={`#${item.value}`}
            key={item.id}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="flex flex-row gap-10">
        {socialLinks.map((item) => (
          <img
            key={item.id}
            src={item.image}
            className="w-5 hover:cursor-pointer object-cover"
            onClick={() => window.open(item.url, "_blank")}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
