import React, { useState, useRef, useEffect } from 'react';
import { links, social } from '../data/links.js';
import { FaBars } from 'react-icons/fa';

const Navigation = () => {
  const [ link, setLink ] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);
  const linkToggle = () => {
    setLink(!link);
  };

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    if (link) {
      linkContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linkContainerRef.current.style.height = '0px';
    }
  }, [link]); 

  return (
    <nav>
      <div className='Navigation'>
        <div className='brand'>
          <img className='logo' src={""} alt='logo' />
          <button className='toggle' onClick={linkToggle}>
            <FaBars />
          </button>
        </div>
        <div className='link-containter' ref={linkContainerRef}>
          <ul className='links' ref={linkRef}>
            {
              links.map(li => {
                const { id, url, text } = li;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })
            };
          </ul>
        </div>
        <div className='social'>
          <ul className='icons'>
            {
              social.map((i) => {
                const { id, url, icon } = i;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
