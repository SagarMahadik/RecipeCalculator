import React, { Fragment, useEffect, useContext } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import {
  FullWidthDivider,
  PartialWidthDivider
} from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  IconCheckBoxRound,
  CheckBoxIcon,
  CheckBoxIconName,
  IconCheckBoxRoundButton,
  HiddenCheckbox,
  InputTextContainer,
  TextInputRoundLabel,
  TextInputRoundLabelName,
  TextInputRound,
  RoundInputTextContainer
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';
import {
  ActionButton,
  ButtonText,
  PrevoiusButton,
  ButtonContainer
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';

import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import {
  CenterAlignedColumnContainer,
  FlexRowContainer,
  FormSectionNameContainer
} from 'styles/Singularity/ApplicationStyles/ContainerStyles';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

const AddProductPage6 = () => {
  const AddProductContext = useContext(addProductContext);

  const {
    addOnFlavourData,
    getAddOnFlavourData,
    getProductVariantData,
    handleAddOnFlavourChange,
    productVariantData,
    handleProductVariantChange,
    protiens,
    calories,
    fats,
    carbohydrates,
    handleChangeFor,
    handleNutritionData,
    setNutrientData,
    previousStep,
    nextStep
  } = AddProductContext;

  return (
    <Fragment>
      <CenterAlignedColumnContainer>
        <FormSectionNameContainer style={{ marginTop: '5px' }}>
          <PTSansText fontSize="16px" color="#DAA520">
            Nutritional Facts
          </PTSansText>
        </FormSectionNameContainer>
        <PTSansText fontSize="16px" style={{ marginTop: '20px' }}>
          Proteins
        </PTSansText>
        <RoundInputTextContainer>
          <TextInputRound
            type="number"
            name="protiens"
            value={protiens}
            onChange={handleChangeFor('protiens')}
          />
          <TextInputRoundLabel>
            <TextInputRoundLabelName>
              <PTSansText fontSize="16px">Grams</PTSansText>
            </TextInputRoundLabelName>
          </TextInputRoundLabel>
        </RoundInputTextContainer>
        <PTSansText fontSize="16px" style={{ marginTop: '20px' }}>
          Carbohydrates
        </PTSansText>
        <RoundInputTextContainer>
          <TextInputRound
            type="number"
            value={carbohydrates}
            name="carbohydrates"
            onChange={handleChangeFor('carbohydrates')}
          />
          <TextInputRoundLabel>
            <TextInputRoundLabelName>
              <PTSansText fontSize="16px">Grams</PTSansText>
            </TextInputRoundLabelName>
          </TextInputRoundLabel>
        </RoundInputTextContainer>
        <PTSansText fontSize="16px" style={{ marginTop: '20px' }}>
          Fats
        </PTSansText>
        <RoundInputTextContainer>
          <TextInputRound
            type="number"
            value={fats}
            name="fats"
            onChange={handleChangeFor('fats')}
          />
          <TextInputRoundLabel>
            <TextInputRoundLabelName>
              <PTSansText fontSize="16px">Grams</PTSansText>
            </TextInputRoundLabelName>
          </TextInputRoundLabel>
        </RoundInputTextContainer>
        <PTSansText fontSize="16px" style={{ marginTop: '20px' }}>
          Calories
        </PTSansText>
        <RoundInputTextContainer>
          <TextInputRound
            type="number"
            value={calories}
            name="calories"
            onChange={handleChangeFor('calories')}
          />
          <TextInputRoundLabel>
            <TextInputRoundLabelName>
              <PTSansText fontSize="16px">Kcal</PTSansText>
            </TextInputRoundLabelName>
          </TextInputRoundLabel>
        </RoundInputTextContainer>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default AddProductPage6;
