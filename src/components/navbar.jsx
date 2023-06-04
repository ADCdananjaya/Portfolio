import constants from "../constants/const";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-sky-50 text-blue-900">
      <p className="font-semibold">Chamod</p>
      <div className="flex flex-row gap-8">
        {constants.navItems.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
      <div className="flex flex-row gap-10">
        {/* <FontAwesomeIcon icon={faGithub} size="lg" /> */}
        <p>l</p>
      </div>
    </div>
  );
};

export default Navbar;
