import styled from 'styled-components/macro';

import {
  CenterAlignedColumnContainer,
  RowContainer,
  LeftAlignedColumnContainer
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

export const ProductInfoContainer = styled(CenterAlignedColumnContainer)`
  width: 90%;
  background: linear-gradient(
    99.47deg,
    #0b9ea8 1.24%,
    rgba(37, 122, 128, 0) 163.38%
  );
  border: 1px solid #e7eaef;
  box-sizing: border-box;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px 25px 0px 0px;
  margin-top: 25px;
`;

export const ProductHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  width: 100%;
  justify-content: center;
  justify-items: center;
  z-index: 1;
`;

export const ProductName = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #494343;
  margin: 0;
  padding: 8px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const ProductDetailsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 3fr;
  justify-items: space-between;
`;

export const ProductUnit = styled(LeftAlignedColumnContainer)`
  background: linear-gradient(
    99.47deg,
    #c8eff1 1.24%,
    rgba(44, 242, 255, 0) 163.38%
  );
  border: 1px solid #e7eaef;
  width: 40%;
  box-sizing: border-box;
  box-shadow: inset -4px -4px 8px #ffffff, inset 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 16px;
  padding: 4px;
`;
