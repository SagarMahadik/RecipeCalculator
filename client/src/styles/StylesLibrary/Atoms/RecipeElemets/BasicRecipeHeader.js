import styled from 'styled-components/macro';

import {
  CenterAlignedColumnContainer,
  RowContainer,
  LeftAlignedColumnContainer
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

export const BasicRecipeInfoContainer = styled(CenterAlignedColumnContainer)`
  width: 90%;
  background: linear-gradient(
    279.03deg,
    rgba(171, 112, 112, 0.75) -68.08%,
    rgba(255, 0, 0, 0.2775) 90.63%
  );
  border: 1px solid #e7eaef;
  box-sizing: border-box;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px 25px 0px 0px;
  margin-top: 25px;
`;

export const BasicRecipeHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  width: 100%;
  justify-content: center;
  justify-items: center;
  z-index: 1;
`;

export const BasicRecipeName = styled.h1`
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

export const BasicRecipeInfoDivider = styled.div`
  height: 2px;
  width: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #f5f2f2 0%,
    rgba(245, 242, 242, 0) 100%
  );
`;

export const BasicRecipeDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  width: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: 5px;
`;

export const BasicRecipeQuantity = styled(LeftAlignedColumnContainer)`
  background: linear-gradient(99.47deg, #f6d6d6 1.24%, #f29f9f 163.38%);
  border: 1px solid #e7eaef;
  width: 70%;
  box-sizing: border-box;
  box-shadow: inset -4px -4px 8px #ffffff, inset 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 4px;
`;

export const DeleteButton = styled(CenterAlignedColumnContainer)`
  border: 1px solid #e7eaef;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 39px;
  width: 20px;
  margin: 0;
  justify-self: end;
`;

export const IconButtonText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  transform: rotate(${props => (props.rotate ? '45deg' : '0')});
`;

export const AddButton = styled(CenterAlignedColumnContainer)`
  border: 1px solid #e7eaef;
  border-top-color: transparent;
  border-left-color: transparent;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: rgba(50, 247, 211, 0.5);
  height: 39px;
  width: 20px;
  margin: 0;
  justify-self: start;
`;
