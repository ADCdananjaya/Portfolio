import assets from "../assets";
const {
  reactImage,
  redux,
  tailwind,
  mongodb,
  node,
  github,
  linkedin,
  innovative,
  learning,
  futurePath,
  coinWatch,
  movieVerse,
  githubDark,
  linkedinDark,
  innovativeDark,
  learningDark,
} = assets;

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
  {
    id: 0,
    imageLight: github,
    imageDark: githubDark,
    url: "https://github.com/ADCdananjaya",
  },
  {
    id: 1,
    imageLight: linkedin,
    imageDark: linkedinDark,
    url: "https://www.linkedin.com/in/chamod-dananjaya-b8ab6b211/",
  },
];

export const aboutConsts = [
  {
    id: 0,
    imageLight: innovative,
    imageDark: innovativeDark,
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
    imageLight: learning,
    imageDark: learningDark,
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

export const projects = [
  {
    id: 0,
    date: "August 17, 2023",
    image: coinWatch,
    name: "CoinWatch",
    description:
      "A dynamic MERN app offering real-time cryptocurrency statistics, curated news, and trends. Seamlessly hosted on Render and Vercel for optimal performance.",
    live: "https://coin-watch-eight.vercel.app",
    code: "https://github.com/ADCdananjaya/CoinWatch",
  },
  {
    id: 1,
    date: "April 01, 2023",
    image: futurePath,
    name: "FuturePath",
    description:
      "FuturePath is a platform that connects university students with local companies for internships through personalized recommendations and efficient communication tools.",
    live: "",
    code: "https://github.com/ADCdananjaya/FuturePath",
  },
  {
    id: 2,
    date: "June 12, 2023",
    image: movieVerse,
    name: "MovieVerse",
    description:
      "MovieVerse is a MERN website, simplifies accessing a diverse collection of movies and TV shows. Seamlessly navigate and enjoy the latest cinematic content with user-friendly ease.",
    live: "",
    code: "https://github.com/ADCdananjaya/MovieVerse",
  },
];

export default { navItems };
