import React, { useContext } from 'react';
import * as S from './styles';
import { ModalContext } from './Context';

const Modal = () => {
  const { modal, setShowModal } = useContext(ModalContext);
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <div>{JSON.stringify(modal)}</div>
          <button onClick={() => setShowModal(true)}>Abrir Modal </button>
          <button onClick={() => setShowModal(false)}>Fechar Modal</button>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Modal;
