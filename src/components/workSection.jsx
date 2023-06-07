import WorkItems from "./workItems";

const WorkSection = () => {
  return (
    <div
      id="work"
      className="w-full h-auto items-center md:items-start lg:items-start flex flex-col gap-3 px-20 mt-10 font-poppins"
    >
      <p className="text-4xl md:text-5xl lg:text-5xl text-blue-950 font-semibold">
        work.
      </p>
      <p className="text-lg text-center md:text-start lg:text-start md:text-lg lg:text-lg text-blue-950 md:w-9/12 lg:w-9/12">
        The below projects showcase my expertise as a Full Stack Web Developer.
        With captivating designs and robust functionality, I consistently exceed
        client expectations. From concept to deployment, I bring visions to life
        with top-notch solutions.
      </p>
      <WorkItems />
    </div>
  );
};

export default WorkSection;
