import React from 'react';
import { useGlobalContext } from '../data/context.js';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openSide, openModal } = useGlobalContext();
  return (
    <div className='Home'>
      <main>
        <button className='side-toggle' onClick={openSide}>
          <FaBars />
        </button>
        <button className='modal-btn' onClick={openModal}>
          Show Modal
        </button>
      </main>
    </div>
  )
}

export default Home;
