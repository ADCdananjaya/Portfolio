import { socialLinks } from "../constants/const";

const NavSocials = ({ classes }) => {
  return (
    <div className={classes}>
      {socialLinks.map((item) => (
        <img
          key={item.id}
          src={item.image}
          className="w-5 hover:cursor-pointer object-cover"
          onClick={() => window.open(item.url, "_blank")}
        />
      ))}
    </div>
  );
};

export default NavSocials;
