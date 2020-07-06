import React, { createContext, useState } from 'react';

const ModalContext = createContext(false);

const ModalProvider = ({ children }) => {
  const [modal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider value={{ modal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
