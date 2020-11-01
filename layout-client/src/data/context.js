import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [ isSideOpen, setIsSideOpen ]   = useState(false);
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
    <AppContext.Provider
      value={{
        isSideOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSide,
        closeSide,
      }}>
        { children }
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
