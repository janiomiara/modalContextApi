import React from 'react';
import GloblaStyles from './styles/global';
import Modal from './componets/modal';
import { ModalProvider } from './componets/modal/Context';

function App() {
  return (
    <>
      <GloblaStyles />
      <ModalProvider>
        <Modal />
      </ModalProvider>
    </>
  );
}

export default App;
