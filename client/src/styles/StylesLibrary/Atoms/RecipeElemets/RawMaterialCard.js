import styled from 'styled-components/macro';
import {
  ColumnContainer,
  LeftAlignedColumnGridContainer,
  LeftAlignedColumnContainer,
  CenterAlignedColumnContainer,
  CenterAlignedColumnGridContainer
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

import { fontStyles } from 'styles/StylesLibrary/ElementalStyles/FontStyles';

const {
  recipeModule: {
    rawMaterialCard: { rawMaterialCardHeaderFont, rawMaterialCardTextFont }
  }
} = fontStyles;

export const RawMaterialCardContainer = styled(ColumnContainer)`
  width: 90%;
  height: auto;
  background: #ffffff;
  margin-top: 25px;
  padding-bottom: 10px;
  box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;

export const RawMaterialCardHeaderContainer = styled(
  LeftAlignedColumnGridContainer
)`
  width: 97%;
  grid-template-columns: 4fr 2fr 1fr 0.5fr;
  padding-left: 10px;
  height: 40px;
`;

export const RawMaterialHeaderText = styled.h1`
  font-family: ${rawMaterialCardHeaderFont};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  color: #e89191;
`;

export const RawMaterialCardDivider = styled.div`
  width: 100%;
  height: 4px;
  background: linear-gradient(
    271.07deg,
    #d9d3d3 -29.24%,
    rgba(130, 5, 5, 0.2) 131.58%
  );
`;

export const RawMaterialContainer = styled(LeftAlignedColumnGridContainer)`
  grid-template-columns: 4fr 2fr 1fr 0.5fr;
  width: 97%;
  height: 42px;
  padding-left: 10px;
  background: ${props => (props.isOdd ? '#ffffff' : '#f5f5f5')};
`;

export const RawMaterialNameRateContainer = styled(
  LeftAlignedColumnContainer
)``;

export const RawMaterialCardText = styled.h1`
  margin: 0;
  padding: 0;
  font-family: ${rawMaterialCardTextFont};
  font-style: normal;
  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: 12px;
  line-height: 16px;
  color: #5b5555;
`;

export const RawMaterialDeleteButton = styled(CenterAlignedColumnContainer)`
  width: 11px;
  height: 42px;
  margin: 0;
  background: ${props => (props.isOdd ? '#f5f5f5' : '#ffffff')};
  justify-self: end;
  border-radius: 5px 0px 0px 5px;
  color: #e89191;
`;

export const TotalRawMaterialQtyCost = styled(CenterAlignedColumnGridContainer)`
  grid-template-columns: 4fr 2fr 2fr;
  height: 30px;
  padding-top: 10px;
`;
