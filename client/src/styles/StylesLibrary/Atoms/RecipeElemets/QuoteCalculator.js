import styled from 'styled-components/macro';

import {
  CenterAlignedColumnContainer,
  ColumnContainer,
  RowContainer
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

export const QuoteCalculatorContainer = styled(ColumnContainer)`
  width: 90%;
  height: auto;
  margin: 25px;
  background: #f1f1f1;
  box-shadow: -4px -4px 6px 4px rgba(255, 255, 255, 0.5),
    4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;

export const QuoteCalculatorHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-radius: 25px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 35px;
  background: #f6d6d6;
`;

export const QuoteCalculatorHeaderText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`;

export const QuoteProductsContainer = styled(CenterAlignedColumnContainer)`
  width: 100%;
  background: #f1f1f1;
`;

export const QuoteProductContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  margin-top: 8px;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

export const QuoteProductNameContainer = styled(RowContainer)`
  background: #f4f7f8;
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.25), 1px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 20px;
  width: 90%;
  margin-left: 8px;
  padding: 4px;
  justify-items: flex-start;
`;

export const QuoteProductNameText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  margin: 0;
  align-items: center;
  color: #000000;
  text-transform: uppercase;
`;

export const QuoteProductUnitContainer = styled(RowContainer)`
  background: linear-gradient(90deg, #b2b3ad 0%, #949790 100%);
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 60%;
  margin: 8px;
  height: 20px;
  padding-right: 4px;
  justify-content: flex-end;
`;

export const QuoteProductUnitText = styled.h1`
  font-family: Orbitron;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: right;
  line-height: 15px;
  margin: 0;
  text-align: right;
  color: #000000;
`;

export const QuoteProductCostContainer = styled(QuoteProductUnitContainer)``;

export const QuoteProductCostText = styled(QuoteProductUnitText)``;

export const QuoteTotalCostDetailsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f4f7f8;
  //box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.25), 1px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  justify-items: center;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 50px;
`;

export const QuoteTotalCostLabelText = styled.h1`
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
`;

export const QuoteTotalCostContainer = styled(RowContainer)`
  width: 60%;
  height: 20px;
  background: linear-gradient(
    99.47deg,
    #c8eff1 1.24%,
    rgba(44, 242, 255, 0) 163.38%
  );
  border: 1px solid #e7eaef;
  box-sizing: border-box;
  box-shadow: inset -4px -4px 8px #ffffff, inset 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  justify-content: flex-end;
`;

export const QuoteTotalCostText = styled.h1`
  font-family: Orbitron;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: right;
  line-height: 15px;
  margin: 0;
  text-align: right;
  color: #000000;
`;
