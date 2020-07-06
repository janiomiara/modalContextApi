import React, { useContext } from 'react';
import { ModalContext } from '../modal/Context';
import * as S from './styles';

const BotaoOpen = () => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <S.Container>
      <S.Button onClick={() => setShowModal(true)}>ARBIR MODAL</S.Button>
    </S.Container>
  );
};

export default BotaoOpen;
