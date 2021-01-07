import React from 'react';

import InputTextBox from 'styles/StylesLibrary/Molecules/DarkTheme/FormMolecules/InputMolecules/InputTextBox.js';
import InputButton from 'styles/StylesLibrary/Molecules/DarkTheme/FormMolecules/InputMolecules/InputButton.js';
import FormSectionHeading from 'styles/StylesLibrary/Molecules/DarkTheme/FormMolecules/FormSectionHeading.js';
import FormShortDivider from 'styles/StylesLibrary/Molecules/DarkTheme/FormMolecules/FormShortDivider.js';
import SubmitButton from 'styles/StylesLibrary/Molecules/DarkTheme/FormMolecules/InputMolecules/SubmitButton.js';
import NavigationCard from 'styles/StylesLibrary/Molecules/DarkTheme/NavigationMolecules/NavigationCard.js';
import PageHeading from 'styles/StylesLibrary/Molecules/DarkTheme/PageHeadingMolecule/index.js';

import {
  PageContentContainer,
  CenterAlignedColumnContainerWOShadowBackground
} from 'styles/StylesLibrary/ElementalStyles/PositionStyles/index.js';

import SearchResults from 'styles/StylesLibrary/Molecules/DarkTheme/FormMolecules/SearchResults.js';

const FormInput = () => {
  return (
    <CenterAlignedColumnContainerWOShadowBackground>
      <PageHeading />
      <PageContentContainer>
        <InputTextBox />
        <InputTextBox />
        <FormShortDivider />
        <FormSectionHeading />
        <InputButton />
        <FormShortDivider />
        <InputTextBox />
        <SearchResults />
        <SubmitButton />
      </PageContentContainer>
    </CenterAlignedColumnContainerWOShadowBackground>
  );
};

export default FormInput;
