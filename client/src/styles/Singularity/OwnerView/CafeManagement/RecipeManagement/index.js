import styled, { keyframes } from 'styled-components/macro';

import {
  ColumnContainer,
  RowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  TextBox,
  LabelText
} from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  PTSansText,
  FormHeadingText
} from 'styles/Singularity/Style1.0/TextStyles';

import { SubmitButton } from 'styles/Singularity/Style1.0/ButtonStyles';

import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';
import { motion } from 'framer-motion';

export const AnimationContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  &:nth-child(even) {
    background-color: blue;
  }
`;

export const GridContainenr = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 38% 20% 20% 12% 8%;
  grid-auto-rows: 45px;
  align-items: center;
  justify-items: center;
  border-radius: 8px;
  color: ${props => (props.clicked ? `#ffffff` : `${styles.formContentColor}`)};
  font-size: 0.8em;
  font-family: PT Sans;
  transition: color ease-out 1.2s;

  background-color: ${props => (props.isEven ? `#ffffff` : `#f6f6f6`)};
`;

export const LabelGridContainenr = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 38% 20% 20% 12% 8%;
  grid-auto-rows: 45px;
  align-items: center;
  justify-items: center;
  color: ${styles.formContentColor};
  font-size: 0.8em;
  font-family: PT Sans;
  border-radius: 8px;
  background-color: rgba(176, 167, 229, 0.2);
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

export const BasicRecipeCostQuantityContainer = styled(DetailsContainer)`
  margin-top: 0em;
  background-color: rgba(176, 126, 249, 0.46);
`;

export const TotalCostQuantityContainer = styled(DetailsContainer)`
  background-color: rgba(176, 167, 229, 0.6);
  max-width: 600px;
`;
export const BasicRecipeNameContainer = styled.div`
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

export const RawMaterial = styled.div`
  text-align: center;
  align-self: center;
  justify-self: center;
  color: ${styles.formContentColor};
  outline: none;
  border: none;
`;

export const RawmateriaName = styled.input`
  font-size: 12px;
  width: 155px;
  height: 1em;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: color ease-out 1.2s;
  color: ${props => (props.clicked ? `#ffffff` : `${styles.formContentColor}`)};
  text-align: center;
  padding-top: 3px;
  &:focus {
    outline: none;
    border: 1px solid #6e5dcc;
  }
  background-color: ${props => (props.isEven ? `#ffffff` : `#f6f6f6`)};
`;

export const QuantityDisplay = styled.div`
  align-self: center;
  justify-self: center;
`;

export const BasicRecipeName = styled(FormHeadingText)`
  font-size: 14px;
`;

export const Quantity = styled.input`
  font-size: 1em;
  width: 3em;
  height: 1.2em;
  outline: none;
  border: none;
  border-radius: 5px;
  line-height: 1em;
  transition: color ease-out 1.2s;
  color: ${props => (props.clicked ? `#ffffff` : `${styles.formContentColor}`)};
  text-align: right;
  &::-webkit-inner-spin-button {
    display: none;
  }
  -moz-appearance: textfield;
  margin: 0;
  padding: 0;
  &:focus {
    outline: none;
    border: 1px solid #6e5dcc;
  }
  background-color: ${props => (props.isEven ? `#ffffff` : `#f6f6f6`)};
`;

export const QuantityDisplayProduction = styled.div`
  font-size: 0.9em;
  padding: 0.1em;
  height: 1.5em;
  outline: none;
  border: none;
  border-radius: 5px;
  padding-top: 3px;
  transition: color ease-out 1.2s;
  color: ${props => (props.clicked ? `#ffffff` : `${styles.formContentColor}`)};
  text-align: right;

  &:focus {
    outline: none;
    border: 1px solid #6e5dcc;
  }
  background: ${styles.backgroundGradient};
`;

export const NumberOfUnits = styled.input`
  font-size: 12px;
  width: 4em;
  height: 2em;
  outline: none;
  border: none;
  border-radius: 15px;
  transition: color ease-out 1.2s;
  color: ${props => (props.clicked ? `#ffffff` : `${styles.formContentColor}`)};
  text-align: center;
  padding-top: 3px;
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

export const BaseRecipeCostForUnits = styled.div`
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

export const QuantityUnit = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  font-size: 1em;
`;

export const BaseRate = styled.div`
  align-self: center;
  justify-self: center;
`;

export const BaseRateUnit = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  font-size: 1em;
`;

export const CostOfRawMaterial = styled.div`
  align-self: center;
  justify-self: center;
  font-size: 1em;
`;

export const SearchResultContainer = styled(ColumnContainer)`
  width: 80%;
  height: 2.5em;
  align-items: flex-start;
  border: 1px solid #cac9cf;
  box-sizing: border-box;
  color: ${styles.formContentColor};
  padding-left: 10px;
  border-radius: 5px;
  background: rgba(176, 167, 229, 0.2);
`;

export const SearchResultText = styled(PTSansText)`
  font-size: 14px;
`;

export const SearchBrandName = styled(PTSansText)`
  font-size: 10px;
`;

export const SearchPrice = styled(PTSansText)`
  font-size: 10px;
  margin-left: 10px;
`;

export const SearchBaseUnitRate = styled(PTSansText)`
  font-size: 10px;
`;

export const BrandPriceContainer = styled(RowContainer)`
  align-items: flex-start;
  padding: 4px;
`;

export const DeleteIcon = styled.div`
  width: 10px;
  height: 1em;
  border-radius: 50%;
  border: 5px solid ${styles.formContentColor};
`;

export const HideIcon = styled.div`
  width: 10px;
  height: 1em;
  border-radius: 50%;
  border: 5px solid #28b463;
`;

export const RotateIcon = styled.div`
  color: ${styles.formContentColor};
  transition: all ease 0.2s;
  transform: rotate(${props => (props.clicked ? '180deg' : '0deg')});
  margin-top: ${props => (props.clicked ? `-6px` : '6px')};
`;

export const TotalQuantity = styled(RowContainer)``;

export const TotalCostLabel = styled(PTSansText)`
  font-size: 16px;
  color: ${styles.formContentColor};
  justify-self: center;
`;

export const FinalRawMaterialCost = styled(PTSansText)`
  font-size: 14px;
  color: ${styles.formContentColor};
  font-weight: bold;
  justify-self: end;
`;

export const SaveOptionsContainer = styled(RowContainer)`
  width: 90%;
  justify-content: space-evenly;
  margin-top: 1em;
  overflow-y: auto;
  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const RecipeSubmitButton = styled(SubmitButton)`
  margin-top: 2em;
`;

export const BrandName = styled(TextBox)``;

export const BrandNameLabel = styled(LabelText)`
  ${BrandName}:focus ~ &,
  ${BrandName}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

export const RecipeUrl = styled(TextBox)``;

export const RecipeUrlLabel = styled(LabelText)`
  ${RecipeUrl}:focus ~ &,
  ${RecipeUrl}:not(:placeholder-shown) ~ & {
    top: 0;
    left: 0;
    color: ${styles.formContentColor};
    font-size: 16px;
  }
`;

export const ProductPricingLabelGridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr 2fr 2fr;
  grid-auto-rows: 45px;
  align-items: center;
  justify-items: center;
  color: ${styles.formContentColor};
  font-size: 0.8em;
  font-family: PT Sans;
  border-radius: 8px;
  background-color: rgba(176, 167, 229, 0.2);
`;

export const ProductPricingDataContainer = styled(
  ProductPricingLabelGridContainer
)`
  background-color: white;
`;

export const ProductPricingNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
`;

export const ProductPricingLabel = styled(PTSansText)`
  font-weight: bold;
  font-size: 14px;
`;

export const ProductPricingContentText = styled(PTSansText)`
  font-size: 12px;
`;
