import React from 'react';
import { useGlobalContext } from '../data/context.js';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openSide, openModal } = useGlobalContext();
  return (
    <div className='Home'>
      <main>
        <button>

        </button>
      </main>
    </div>
  )
}

export default Home;
