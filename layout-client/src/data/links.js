import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const routes = [
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

export const links = [
  {
    id: 1,
    url: "www.github.com/ch2isk4kos",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "www.linkedin.com/in/chris-kakos",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "www.twitter.com/ch2isk4kos",
    icon: <FaTwitter />,
  },
];
