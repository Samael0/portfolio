import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Google Drive Clone",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Dotfiles",
    des: "My personal dotfiles for devlopment environment",
    img: "/dotfiles.svg",
    iconLists: ["/lua.svg", "/shell.svg"],
    link: "https://github.com/Samael0/dotfiles",
  },
];

export const builtWithCompanies = [
  {
    id: 1,
    name: "next.js",
    img: "/nextjs.svg",
  },
  {
    id: 2,
    name: "tailwindcss",
    img: "/tailwindcss.svg",
  },
  {
    id: 3,
    name: "typescript",
    img: "/typescript.svg",
  },
  {
    id: 4,
    name: "vercel",
    img: "/vercel.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/engineears.svg",
  },
  {
    id: 2,
    title: "Software Engineer II",
    desc: "Web crawling and data extraction using Python, Typescript, Puppeteer and Playwright.",
    className: "md:col-span-2",
    thumbnail: "/pricespider.svg",
  },
  {
    id: 3,
    title: "Software Engineer II",
    desc: "Led the dev of a e-commerce platform using React.js, Node.js, and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/stock4less.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Samael0",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/josealvarado312/",
  },
];
