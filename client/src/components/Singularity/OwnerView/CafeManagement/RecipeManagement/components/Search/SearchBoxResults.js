import React, { useContext, useState } from 'react';

import SearchResultsContainer from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SearchResultsContainer.js';
import SearchBox from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SearchBox.js';

import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import { AnimatePresence } from 'framer-motion';

import { useApplicationState } from 'Context/ApplicationContext/ApplicationState.js';
import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import { useRecipeDispatch } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import { isArrayEmpty } from 'Utils/validations.js';

const SearchBoxResults = props => {
  const { rawMaterialDetails } = useApplicationState();

  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    searchString,
    searchResults,
    searchArray,
    searchFilter,
    hideSearchResults
  } = RecipeManagementContext;

  const dispatch = useRecipeDispatch();

  const [count, setCount] = useState(0);

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
      .slice(0, 9);

    {
      dispatch({
        type: 'UPDATE_SEARCHRESULTS',
        payload: filterOptions
      });
    }
  };

  const handleSearchItemClick = (item, index, basicRecipeId) => {
    if (searchFilter === 'rawMaterial') {
      setCount(count + 1);

      let newItem = {};

      newItem = { ...item, uniueId: count };
      dispatch({
        type: 'UPDATE_RAWMATERIALS',
        payload: newItem
      });
    }
    if (searchFilter === 'basicRecipe') {
      setCount(count + 1);

      let newItem = {};

      newItem = { ...item, uniueId: count };
      dispatch({
        type: 'UPDATE_BASICRECIPE',
        payload: newItem,
        rmdetails: item.details
      });
    }
    if (searchFilter === 'basicRecipeRawMaterial') {
      console.log(index);
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

      {!hideSearchResults
        ? searchResults.map((result, index) => {
            return (
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
            );
          })
        : null}

      <PartialWidthDivider />
    </RecipeManagementContainer>
  );
};

export default SearchBoxResults;
