import React from 'react'
import { useGlobalContext } from '../data/context';
import { sideSocial, sideLinks } from '../data/links';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const { isSideOpen, closeSide } = useGlobalContext();

  return (
    <aside className={`${isSideOpen ? 'Sidebar show-sidebar' : 'Sidebar'}`}>
      <div className='sidebar-header'>
        <img className='side-logo' src={''} alt='logo' />
        <button className='close-btn' onClick={closeSide}>
          <FaTimes />
        </button>
      </div>
      <ul className='side-links'>
        {
          sideLinks.map((li) => {
            const { id, url, text, icon } = li;
            return (
              <li key={id}>
                <a href={url}>{icon}{text}</a>
              </li>
            )
          })
        }
      </ul>
      <ul className='side-social'>
        {
          sideSocial.map((li) => {
            const { id, url, icon } = li;
            return (
              <li key={id}>
                <a href={url} rel="noreferrer" target='_blank'>{icon}</a>
              </li>
            )
          })
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
