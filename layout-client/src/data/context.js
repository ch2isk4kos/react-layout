import React, { useState, useContext } from 'react';

const ApplicationContext = React.createContext();

const ApplicationProvider = ({ children }) => {
  const [ isSideOpen, setIsSideOpen ] = useState(false);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const openSide = () => {
    setIsSideOpen(true);
  };
  const closeSide = () => {
    setIsSideOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ApplicationContext.Provider
      value={{
        isSideOpen,
        isModalOpen,
        openSide,
        closeSide,
        openModal,
        closeModal,
      }}>
        { children }
    </ApplicationContext.Provider>
  );
};

export const useGlobalConext = () => {
  return useContext(ApplicationContext);
}

export { ApplicationContext, ApplicationProvider };
