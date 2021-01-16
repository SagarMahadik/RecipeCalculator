import React, { useContext } from 'react';

import {
  RadioButtonText,
  TextContainer,
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

import FormSectionHading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';
import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';

import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  SaveOptionsContainer,
  AnimationContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
const SubmitRecipe = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    saveOptionDisplay,
    saveOption,
    handleSaveOption
  } = RecipeManagementContext;

  return (
    <>
      <RecipeManagementContainer>
        <FormSectionHading sectionName="Save recipe as" />

        <SaveOptionsContainer>
          {saveOptionDisplay.map((item, index) => {
            return (
              <>
                <StyledRadioButton
                  value={item.optionValue}
                  selected={saveOption === `${item.optionValue}`}
                  onClick={handleSaveOption}
                  display={item.option}
                />
              </>
            );
          })}
        </SaveOptionsContainer>
        <PartialWidthDivider />
      </RecipeManagementContainer>
    </>
  );
};

export default SubmitRecipe;
