import reactImage from "../assets/react.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongo.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import innovative from "../assets/innovative.png";
import learning from "../assets/learning.png";

const navItems = [
  { id: 0, title: "Home", value: "home" },
  { id: 1, title: "About", value: "about" },
  { id: 2, title: "Work", value: "work" },
];

export const technologies = [
  { id: 0, image: reactImage, url: "https://react.dev" },
  { id: 1, image: redux, url: "https://redux.js.org" },
  { id: 2, image: tailwind, url: "https://tailwindcss.com" },
  { id: 3, image: mongodb, url: "https://www.mongodb.com" },
  { id: 4, image: node, url: "https://nodejs.org" },
];

export const socialLinks = [
  { id: 0, image: github, url: "https://github.com/ADCdananjaya" },
  {
    id: 1,
    image: linkedin,
    url: "https://www.linkedin.com/in/chamod-dananjaya-b8ab6b211/",
  },
];

export const aboutConsts = [
  {
    id: 0,
    image: innovative,
    title: "Passionate about Building Innovative Web Solutions",
    descriptions: [
      {
        id: 0,
        value:
          "Dedicated full stack web developer with expertise in React, Node.js, Express, MongoDB, and Redux.",
      },
      {
        id: 1,
        value:
          "Proficient in developing robust and user-friendly web applications that deliver seamless user experiences.",
      },
      {
        id: 2,
        value:
          "Committed to staying updated with the latest web development trends and technologies.",
      },
    ],
  },
  {
    id: 1,
    image: learning,
    title: "Continuous Learning and Growth",
    descriptions: [
      {
        id: 0,
        value:
          "Actively engaged in continuous learning to enhance technical skills and stay ahead in the rapidly evolving field of web development.",
      },
      {
        id: 1,
        value:
          "Participating in online courses, workshops, and hackathons to broaden knowledge and tackle new challenges.",
      },
      {
        id: 2,
        value:
          "Passionate about problem-solving and exploring innovative solutions to address real-world problems.",
      },
    ],
  },
];

export default { navItems };
