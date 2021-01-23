import React, { useContext } from 'react';

import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';
import Loaders from 'components/Singularity/ApplicationView/Loaders';
import FormSectionHading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';

import {
  RecipeManagementContainer,
  SearchFilterContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import { useRecipeDispatch } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';
import { isArrayEmpty } from 'Utils/validations.js';

const SearchOptions = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  let {
    searchFilterDisplay,
    searchFilter,
    saveOption
  } = RecipeManagementContext;

  const { rawMaterialDetails, basicRecipes } = useApplicationState();

  const dispatch = useRecipeDispatch();

  if (isArrayEmpty(rawMaterialDetails)) {
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

  const handleSearchFilter = e => {
    let filter = e.currentTarget.value;
    let currentArray = [];

    if (filter === 'rawMaterial') {
      currentArray = [...rawMaterialDetails];
    }
    if (filter === 'basicRecipe') {
      currentArray = [...basicRecipes];
    }
    if (filter === 'product') {
      currentArray = [];
    }
    {
      dispatch({
        type: 'CLEAR_SEARCHRESULTS',
        payload: []
      });
    }

    dispatch({
      type: 'SET_SEARCHFILTER',
      payload: filter,
      temparray: currentArray
    });
  };

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
        <FormSectionHading sectionName="Search" />
        <SearchFilterContainer>
          {searchFilterDisplay.map((item, index) => {
            return (
              <StyledRadioButton
                key={item.filterValue}
                value={item.filterValue}
                selected={searchFilter === `${item.filterValue}`}
                onClick={handleSearchFilter}
                display={item.filterDisplay}
              />
            );
          })}
        </SearchFilterContainer>
      </RecipeManagementContainer>
    </AnimationContainer>
  );
};

export default SearchOptions;
