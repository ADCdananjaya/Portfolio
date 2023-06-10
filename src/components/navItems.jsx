import { Link } from "react-scroll";
import constants from "../constants/const";

const NavItems = (props) => {
  return (
    <div className={props.classes}>
      {constants.navItems.map((item) => (
        <Link
          className="hover:text-light-blue dark:hover:text-lighter-gray ease-in-out duration-500 hover:cursor-pointer"
          to={item.value}
          key={item.id}
          smooth={true}
          duration={500}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
