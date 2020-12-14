import React, { useContext } from 'react';

import {
  Proteins,
  Carbohydrates,
  Calories,
  Fats,
  ProteinsLabel,
  CarbohydratesLabel,
  CaloriesLabel,
  FatsLabel,
  InputWrapper
} from 'styles/Singularity/Style1.0/FormInputStyles';

import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

const NutritionalFacts = () => {
  const AddProductContext = useContext(addProductContext);

  const {
    protiens,
    calories,
    fats,
    carbohydrates,
    handleChangeFor
  } = AddProductContext;

  return (
    <>
      <CenterAlignedColumnContainer>
        <FormHeadingText>
          <FormSectionHeadingTextContainer>
            Nutritional Facts
          </FormSectionHeadingTextContainer>
        </FormHeadingText>
        <InputWrapper>
          <Proteins
            placeholder=" "
            type="number"
            name="protiens"
            value={protiens}
            onChange={handleChangeFor('protiens')}
          />
          <ProteinsLabel>Proteins</ProteinsLabel>
        </InputWrapper>
        <InputWrapper>
          <Carbohydrates
            placeholder=" "
            type="number"
            value={carbohydrates}
            name="carbohydrates"
            onChange={handleChangeFor('carbohydrates')}
          />
          <CarbohydratesLabel>Carbohydrates</CarbohydratesLabel>
        </InputWrapper>
        <InputWrapper>
          <Calories
            placeholder=" "
            type="number"
            value={fats}
            name="fats"
            onChange={handleChangeFor('fats')}
          />
          <FatsLabel>Fats</FatsLabel>
        </InputWrapper>
        <InputWrapper>
          <Fats
            placeholder=" "
            type="number"
            value={calories}
            name="calories"
            onChange={handleChangeFor('calories')}
          />
          <CaloriesLabel>Calories</CaloriesLabel>
        </InputWrapper>

        <PartialWidthDivider />
      </CenterAlignedColumnContainer>
    </>
  );
};

export default NutritionalFacts;
