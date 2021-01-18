import React, { useContext, useRef } from 'react';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import { isArrayEmpty } from 'Utils/validations.js';

import SearchResultsContainer from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SearchResultsContainer.js';
import SearchBox from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SearchBox.js';

import { useRecipeDispatch } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';
import { AnimatePresence } from 'framer-motion';

const SearchBoxResults = props => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    searchString,
    searchResults,
    searchArray,
    searchFilter,
    hideSearchResults
  } = RecipeManagementContext;

  const { rawMaterialDetails } = useApplicationState();

  const searchResultRefs = useRef([]);
  searchResultRefs.current = [];

  const dispatch = useRecipeDispatch();

  const handleSearchText = e => {
    let string = e.currentTarget.value;

    {
      dispatch({
        type: 'UPDATE_SEARCHSTRING',
        payload: string
      });
    }

    let filterOptions = searchArray
      .filter(
        material =>
          material.name.toLowerCase().indexOf(string.toLowerCase()) > -1
      )
      .slice(0, 4);

    {
      dispatch({
        type: 'UPDATE_SEARCHRESULTS',
        payload: filterOptions
      });
    }
  };

  const handleSearchItemClick = (item, index, basicRecipeId) => {
    if (searchFilter === 'rawMaterial') {
      dispatch({
        type: 'UPDATE_RAWMATERIALS',
        payload: item
      });
    }
    if (searchFilter === 'basicRecipe') {
      dispatch({
        type: 'UPDATE_BASICRECIPE',
        payload: item,
        rmdetails: item.details
      });
    }
    if (searchFilter === 'basicRecipeRawMaterial') {
      dispatch({
        type: 'ADD_BASICRECCIPESEARCHRM',
        index1: index,
        item1: item,
        id1: basicRecipeId
      });
    }

    if (searchFilter === 'product') {
      dispatch({
        type: 'UPDATE_RECIPE',
        rawMaterial: item.rawMaterialDetails,
        basicRecipes: item.basicRecipeDetails,
        productDetails: item
      });
    }
  };

  if (isArrayEmpty(rawMaterialDetails)) {
    return null;
  }

  return (
    <RecipeManagementContainer>
      <SearchBox
        placeholder=" "
        value={searchString}
        onChange={handleSearchText}
      />
      <AnimatePresence>
        {!hideSearchResults
          ? searchResults.map((result, index) => {
              return (
                <AnimationContainer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: 'easeOut',
                    duration: 0.8
                  }}
                  exit={{ opacity: 0, scaleY: 0 }}
                >
                  <SearchResultsContainer
                    onClick={() =>
                      handleSearchItemClick(
                        result,
                        props.arrayIndex,
                        props.basicRecipeID
                      )
                    }
                    key={index}
                    itemName={result.name}
                    itemBaseQuantity={result.baseQuantity}
                    brandName={result.brandName}
                    itemRate={result.rate}
                    itemBaseUnit={result.baseUnit}
                  />
                </AnimationContainer>
              );
            })
          : null}
      </AnimatePresence>

      <PartialWidthDivider />
    </RecipeManagementContainer>
  );
};

export default SearchBoxResults;
