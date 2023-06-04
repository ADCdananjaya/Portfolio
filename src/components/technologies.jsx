import { technologies } from "../assets";

const Technologies = () => {
  return (
    <div className="flex flex-row gap-5 pl-14">
      {technologies.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center bg-white rounded-3xl w-16 h-16 shadow-md hover:cursor-pointer hover:bg-gray-50 ease-in-out duration-200"
          onClick={() => window.open(item.url, "_blank")}
        >
          <img
            src={item.image}
            className={`${item.id === 3 ? "h-12" : "w-12"} object-cover`}
          />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
