import { aboutConsts } from "../constants/const";

const AboutItems = () => {
  return (
    <div className="flex flex-col text-blue-950 font-poppins">
      {aboutConsts.map((item) => (
        <div key={item.id} className="flex flex-row items-center">
          <img src={item.image} className="w-60 object-cover" />
          <ul className="flex flex-col gap-3">
            <li className="text-xl font-semibold list-disc list-inside">
              {item.title}
            </li>
            <ul className="pl-8 flex flex-col gap-2">
              {item.descriptions.map((des) => (
                <li key={des.id} className="text-md list-disc list-inside">
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
