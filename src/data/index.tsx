import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdOutlineMonitor } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";
import type { InfoContainerItem, SocialLink, Tech } from "../types";

export const aboutDesc = `Over 4 years of experience in business of development, I have had\na chance to work on a 
    variety of projects, with agencies, companies or even individuals. Web applications, Mobile applications, 
    front-end and back-end development. For work inquires send me an Email.`;

export const technologies = [
  { id: 1, title: "java script", percentage: 90 },
  { id: 2, title: "type script", percentage: 80 },
  { id: 3, title: "React js", percentage: 85 },
  { id: 4, title: "React Native", percentage: 80 },
];

export const services = [
  {
    id: 1,
    icon: <TbDeviceMobileCode size={40} />,
    title: "mobile apps",
    desc: "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
  },
  {
    id: 2,
    icon: <MdOutlineMonitor size={40} />,
    title: "frontent",
    desc: "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
  },
  {
    id: 3,
    icon: <FaCode size={40} />,
    title: "backend",
    desc: "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
  },
];

export const experiences: InfoContainerItem[] = [
  {
    id: 1,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 2,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 3,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 4,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
];

export const education: InfoContainerItem[] = [
  {
    id: 1,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "PG Diploma in Advanced Computing",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 2,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 3,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 4,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
];

export const upperRow: Tech[] = [
  {
    alt: "javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    alt: "typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    alt: "react js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    alt: "react router",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
  },
  {
    alt: "redux toolkit",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    alt: "next js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    alt: "react bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg",
  },
  {
    alt: "tailwind",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    alt: "vite js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    alt: "wordpress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
  },
];

export const lowerRow: Tech[] = [
  {
    alt: "node js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    alt: "nest js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
  },
  {
    alt: "python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    alt: "fastapi",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    alt: "firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    alt: "postgresql",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    alt: "mongodb",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    alt: "docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    alt: "git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    alt: "android studio",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  },
  {
    alt: "xcode",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
  },
  {
    alt: "postman",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    alt: "vscode",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    title: "linkedin",
    color: "#0077b5",
    icon: <FaLinkedin size={30} />,
    to: "https://www.linkedin.com/in/naval-verma-241344a9/",
  },
  {
    id: 2,
    title: "github",
    color: "#10a30b",
    icon: <FaGithubSquare size={30} />,
    to: "https://github.com/naval-singh",
  },
  {
    id: 3,
    title: "facebook",
    color: "#3b5998",
    icon: <FaFacebookSquare size={30} />,
    to: "https://www.facebook.com/",
  },
  {
    id: 4,
    title: "instagram",
    color: "#e4405f",
    icon: <FaInstagramSquare size={30} />,
    to: "https://www.instagram.com/",
  },
  {
    id: 5,
    title: "twitter",
    color: "#1da1f2",
    icon: <FaTwitterSquare size={30} />,
    to: "https://x.com/",
  },
];

export const sidebarItems = [
  { id: 1, title: "home", link: "home" },
  { id: 2, title: "about", link: "about" },
  { id: 3, title: "services", link: "services" },
  { id: 4, title: "resume", link: "resume" },
  { id: 5, title: "tech stack", link: "techstack" },
  { id: 6, title: "contact", link: "contact" },
  {
    id: 7,
    title: "follow",
    link: "#",
    subTitle: socialLinks,
  },
];
