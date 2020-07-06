import React from 'react';
import GloblaStyles from './styles/global';
import Modal from './componets/modal';
import { ModalProvider } from './componets/modal/Context';
import Botao from './componets/openModal/botaoAbrirModal';

function App() {
  return (
    <>
      <GloblaStyles />
      <ModalProvider>
        <Modal />
        <Botao />
      </ModalProvider>
    </>
  );
}

export default App;
