import { aboutConsts } from "../constants/const";

const AboutItems = () => {
  return (
    <div className="flex flex-col text-blue-950 font-poppins gap-2 md:gap-8 lg:gap-0">
      {aboutConsts.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row lg:flex-row items-center"
        >
          <img src={item.image} className="w-60 object-cover" />
          <ul className="flex flex-col items-center md:items-start lg:items-start gap-3">
            <li className="text-xl font-semibold list-disc list-inside text-center md:text-start lg:text-start w-11/12 md:w-auto lg:w-auto">
              {item.title}
            </li>
            <ul className="md:pl-8 lg:pl-8 flex flex-col items-center md:items-start lg:items-start gap-2 w-full">
              {item.descriptions.map((des) => (
                <li
                  key={des.id}
                  className="text-md md:list-disc lg:list-disc text-center md:text-start lg:text-start list-inside"
                >
                  {des.value}
                </li>
              ))}
            </ul>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AboutItems;
