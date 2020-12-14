import styled from 'styled-components';
import { styles } from 'styles/Singularity/Style1.0/ApplicationStyles';
import {
  TextBox,
  LabelText,
  InputWrapper
} from 'styles/Singularity/Style1.0/FormInputStyles';
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

export const AnimationContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const RawMMainContainer = styled(CenterAlignedColumnContainer)``;

export const RawMTypeContainer = styled(RowContainer)`
  width: 70%;
  max-width: 600px;
  justify-content: space-evenly;
  margin-top: 1em;
  overflow-y: auto;
  @media (min-width: 765px) {
    width: 60%;
  }
`;
export const SearchResultText = styled(PTSansText)`
  font-size: 14px;
`;

export const SearchResultContainer = styled(ColumnContainer)`
  width: 60%;
  height: 2.5em;
  align-items: flex-start;
  border: 1px solid #cac9cf;
  box-sizing: border-box;
  color: ${styles.formContentColor};
  padding-left: 10px;
  border-radius: 5px;
  background: rgba(176, 167, 229, 0.2);
`;

export const RawMTypeOptionContainer = styled(RowContainer)`
  width: 90%;
  max-width: 600px;
  justify-content: space-evenly;
  margin-top: 1em;
  overflow-y: auto;
  @media (min-width: 765px) {
    width: 60%;
  }
`;

export const GSTOptionContainer = styled(RawMTypeOptionContainer)``;

export const PriceOptionContainer = styled(RawMTypeOptionContainer)``;
