import React, { useContext } from 'react';

import {
  RadioButtonText,
  TextContainer,
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  SaveOptionsContainer,
  AnimationContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
const SubmitRecipe = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    saveOptionDisplay,
    saveOption,
    handleSaveOption
  } = RecipeManagementContext;

  return (
    <>
      <AnimationContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'easeOut',
          duration: 1.2
        }}
        exit={{ opacity: 0 }}
      >
        <RecipeManagementContainer>
          <FormHeadingText>
            <FormSectionHeadingTextContainer>
              Save this recipe as a:
            </FormSectionHeadingTextContainer>
          </FormHeadingText>

          <SaveOptionsContainer>
            {saveOptionDisplay.map((item, index) => {
              return (
                <TextRadioButton
                  value={item.optionValue}
                  selected={saveOption === `${item.optionValue}`}
                  onClick={handleSaveOption}
                >
                  <RadioButtonText
                    selected={saveOption === `${item.optionValue}`}
                  >
                    <TextContainer>{item.option}</TextContainer>
                  </RadioButtonText>
                </TextRadioButton>
              );
            })}
          </SaveOptionsContainer>
          <PartialWidthDivider />
        </RecipeManagementContainer>
      </AnimationContainer>
    </>
  );
};

export default SubmitRecipe;
