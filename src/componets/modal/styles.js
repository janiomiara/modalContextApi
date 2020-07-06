import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.55);
  overflow-y: auto;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: orange;
  border-radius: 5px;
`;
