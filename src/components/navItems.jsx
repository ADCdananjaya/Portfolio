import constants from "../constants/const";

const NavItems = (props) => {
  return (
    <div className={props.classes}>
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
  );
};

export default NavItems;
