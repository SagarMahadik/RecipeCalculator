import styled from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';

import {
  CenterAlignedColumnContainer,
  RowContainer,
  ColumnContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  PTSansText,
  FormHeadingText
} from 'styles/Singularity/Style1.0/TextStyles';

import {
  SearchInputWrapper,
  SearchBox,
  SearchBoxLabel
} from 'styles/Singularity/Style1.0/FormInputStyles';

import { motion } from 'framer-motion';

export const QuoteManagementContainer = styled(CenterAlignedColumnContainer)``;

export const ProductInformationContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 2fr 2fr 1fr;
  height: 40px;
  grid-auto-rows: 45px;
  align-items: center;
  justify-items: center;
  color: ${styles.formContentColor};
  font-size: 16px;
  font-family: PT Sans;
  background-color: rgba(176, 126, 249, 0.46);
  margin-top: 0.8em;
`;

export const ProductInformationLabelContainer = styled(
  ProductInformationContainer
)`
  background-color: white;
`;

export const BasicRecipeInformationContainer = styled(
  ProductInformationContainer
)`
  grid-template-columns: 3fr 2fr 2fr 1fr;
  background-color: #efc5c5;
`;
export const ProductPricingLabelContainer = styled(ProductInformationContainer)`
  grid-template-columns: 2.5fr 1.5fr 1.5fr 2fr 1.5fr;
`;

export const ProductPricingContentContainer = styled(
  ProductPricingLabelContainer
)`
  background-color: ${props => (props.isEven ? `#ffffff` : `#f6f6f6`)};
`;

export const ProductPricingLabelGridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1.5fr 1.5fr 1fr 1fr;
  height: 40px;
  grid-auto-rows: 45px;
  align-items: center;
  justify-items: center;
  color: ${styles.formContentColor};
  font-size: 16px;
  font-family: PT Sans;
  background-color: rgba(176, 126, 249, 0.46);
  margin-top: 0.8em;
`;

export const BasicRecipePricingLabelContainer = styled(
  ProductPricingLabelGridContainer
)`
  background-color: #efc5c5;
`;

export const LabelGridContainenr = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 38% 20% 20% 20%;
  grid-auto-rows: 45px;
  align-items: center;
  justify-items: center;
  color: ${styles.formContentColor};
  font-size: 0.8em;
  font-family: PT Sans;
  border-radius: 8px;
  background-color: rgba(176, 167, 229, 0.2);
`;

export const GridContainer = styled(LabelGridContainenr)`
  background-color: ${props => (props.isEven ? `#ffffff` : `#f6f6f6`)};
  background-color: ${props => (props.isEven ? `#ffffff` : `#f6f6f6`)};
`;

export const DetailsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto 25%;
  grid-auto-rows: 45px;
  align-items: center;
  justify-items: baseline;
  color: ${styles.formContentColor};
  font-size: 1em;
  font-family: PT Sans;
  border-radius: 8px;
  background-color: rgba(176, 167, 229, 0.2);
  margin-top: 0.8em;
`;

export const ProductName = styled(PTSansText)`
  font-size: 14px;
`;

export const BasicRecipeName = styled(PTSansText)``;

export const LabelText = styled(PTSansText)`
  font-size: 14px;
`;

export const TotalCostContainer = styled(RowContainer)`
  width: 50%;
  justify-content: space-between;
  margin-top: 1em;
`;

export const TotalQuoteCost = styled(PTSansText)`
  color: ${props => (props.clicked ? `#ffffff` : `${styles.formContentColor}`)};
  font-size: 18px;
`;
export const TotalQuantity = styled.input`
  font-size: 12px;
  width: 4em;
  height: 1.7em;
  outline: none;
  border: none;
  border-radius: 15px;
  transition: color ease-out 1.2s;
  color: ${props => (props.clicked ? `#ffffff` : `${styles.formContentColor}`)};
  text-align: center;
  padding-top: 8px;
  padding-right: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #6e5dcc;
  &:focus {
    outline: none;
    border: 2px solid #6e5dcc;
  }
  background: white;
`;
export const TotalCost = styled.div`
  font-size: 12px;
  width: 4em;
  height: 1.7em;
  outline: none;
  border: none;
  border-radius: 15px;
  transition: color ease-out 1.2s;
  color: ${props => (props.clicked ? `#ffffff` : `${styles.formContentColor}`)};
  text-align: center;
  padding-top: 8px;
  padding-right: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #6e5dcc;
  &:focus {
    outline: none;
    border: 2px solid #6e5dcc;
  }
  background: white;
`;

export const TotalBasicRecipeUnits = styled(TotalQuantity)``;

export const TotalBasicRecipeCost = styled(TotalCost)`
  width: 5em;
`;

export const TotalProductUnitInQuote = styled(PTSansText)`
  font-size: 14px;
`;

export const TotalCostPerProduct = styled(PTSansText)`
  font-size: 14px;
`;
export const TotalProductSellingPrice = styled(PTSansText)`
  font-size: 14px;
`;
