import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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

export const social = [
  {
    id: 1,
    url: "https://www.github.com/ch2isk4kos",
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
