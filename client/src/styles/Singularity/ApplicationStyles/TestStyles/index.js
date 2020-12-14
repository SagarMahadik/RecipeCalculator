import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: fixed;
  top: 30%;
  left: 10px;
  align-items: center;
  z-index: 5;
`;

export const BreakfastButton = styled(Button)`
  background: pink;
`;

export const SaladButton = styled(Button)`
  background: greenyellow;
  position: fixed;
  top: 40%;
  left: 10px;
`;

export const PastaButton = styled(Button)`
  background: purple;
  position: fixed;
  top: 50%;
  left: 10px;
`;
