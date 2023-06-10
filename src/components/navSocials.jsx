import assets from "../assets";
import { socialLinks } from "../constants/const";
import { setTheme } from "../services/themeService";

const NavSocials = ({ classes, setDarkTheme, isDarkTheme }) => {
  const handleClick = () => {
    setDarkTheme((prev) => !prev);
    setTheme(isDarkTheme);
  };

  return (
    <div className={classes}>
      <button onClick={handleClick}>
        <img
          src={isDarkTheme ? assets.sun : assets.moon}
          className="w-5 hover:cursor-pointer object-cover"
        />
      </button>
      {socialLinks.map((item) => (
        <div key={item.id}>
          <img
            src={item.imageLight}
            className="w-5 hover:cursor-pointer object-cover dark:hidden"
            onClick={() => window.open(item.url, "_blank")}
          />
          <img
            src={item.imageDark}
            className="hidden w-5 hover:cursor-pointer object-cover dark:block"
            onClick={() => window.open(item.url, "_blank")}
          />
        </div>
      ))}
    </div>
  );
};

export default NavSocials;
