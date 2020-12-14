import React, { useContext } from 'react';
import {
  RecipeManagementContainer,
  SearchFilterContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';
import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import {
  RadioButtonText,
  TextContainer,
  FormHeadingText,
  FormSectionHeadingTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';
import recipeManagementContext from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import { TextRadioButton } from 'styles/Singularity/Style1.0/FormInputStyles';
import Loaders from 'components/Singularity/ApplicationView/Loaders';
const SeachItems = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  let {
    searchFilterDisplay,
    searchFilter,
    rawMaterials,
    handleSearchFilter,
    saveOption
  } = RecipeManagementContext;

  if (rawMaterials.length === 0) {
    return (
      <>
        <RecipeManagementContainer>
          <Loaders />
        </RecipeManagementContainer>
      </>
    );
  }

  if (saveOption === 'basicRecipe') {
    searchFilterDisplay = [
      { filterDisplay: 'Raw Material', filterValue: 'rawMaterial' }
    ];
  }

  return (
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
            Search
          </FormSectionHeadingTextContainer>
        </FormHeadingText>
        <SearchFilterContainer>
          {searchFilterDisplay.map((item, index) => {
            return (
              <TextRadioButton
                value={item.filterValue}
                selected={searchFilter === `${item.filterValue}`}
                onClick={handleSearchFilter}
              >
                <RadioButtonText
                  selected={searchFilter === `${item.filterValue}`}
                >
                  <TextContainer>{item.filterDisplay}</TextContainer>
                </RadioButtonText>
              </TextRadioButton>
            );
          })}
        </SearchFilterContainer>
      </RecipeManagementContainer>
    </AnimationContainer>
  );
};

export default SeachItems;
