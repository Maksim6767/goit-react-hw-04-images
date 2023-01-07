import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalWindow = styled.div`
  position: absolute;
  max-height: calc(100vh - 24px);
`;