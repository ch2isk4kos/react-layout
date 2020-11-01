import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaCodepen,
} from 'react-icons/fa';

import { 
  SiCodesandbox,
  SiReplDotIt,
} from 'react-icons/si';

export const links = [
  {
    id: 1,
    url: "/",
    text: "",
  },
  {
    id: 2,
    url: "/home",
    text: "Home",
  },
  {
    id: 3,
    url: "/posts",
    text: "Post",
  },
  {
    id: 4,
    url: "/about",
    text: "About",
  },
  {
    id: 5,
    url: "/contact",
    text: "Contact",
  },
];

export const sideLinks = [
  {
    id: 1,
    url: "/home",
    text: "Home",
  },
  {
    id: 2,
    url: "/education",
    text: "Education",
  },
  {
    id: 3,
    url: "/experience",
    text: "Experience",
  },
  {
    id: 4,
    url: "/projects",
    text: "Projects",
  },
  {
    id: 5,
    url: "/tools",
    text: "Tools",
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/ch2isk4kos",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://linkedin.com/in/chris-kakos",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://twitter.com/ch2isk4kos",
    icon: <FaTwitter />,
  },
];

export const sideSocial = [
  {
    id: 1,
    url: "https://www.codesandbox.io",
    icon: <SiCodesandbox />,
  },
  {
    id: 2,
    url: "https://codepen.com",
    icon: <FaCodepen />,
  },
  {
    id: 3,
    url: "https://repl.it",
    icon: <SiReplDotIt />,
  },
];
