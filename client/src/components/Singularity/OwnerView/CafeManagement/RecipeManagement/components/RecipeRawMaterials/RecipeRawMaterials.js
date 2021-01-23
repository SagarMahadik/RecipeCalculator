import React, { useContext, useCallback, useRef } from 'react';

import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import GridLabel from './GridLabels.js';
import RawMaterialDetailsCard from './RawMaterialDetailsCard';
import TotalRawMaterialCost from './TotalRawMaterialCost';
import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';

import FormSectionHading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';
import { useRecipeDispatch } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import { Transition, TransitionGroup } from 'react-transition-group';

import anime from 'animejs/lib/anime.es.js';

const RecipeRawMaterials = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const { recipeRawMaterials } = RecipeManagementContext;

  const rawMaterialRef = useRef([]);
  rawMaterialRef.current = [];

  const addToRefs = el => {
    if (el && !rawMaterialRef.current.includes(el)) {
      rawMaterialRef.current.push(el);
    }
  };

  const dispatch = useRecipeDispatch();

  const handleRemoveRawMaterial = index => {
    dispatch({
      type: 'REMOVE_RAWMATERIAL',
      payload: index
    });
  };

  const handleRawMaterialNameChange = index => e => {
    let newRawMaterialName = e.target.value;
    let rawMaterialIndex = index;

    dispatch({
      type: 'UPDATE_RAWMATERIALNAME',
      name1: newRawMaterialName,
      index1: rawMaterialIndex
    });
  };

  const handleQuantityChange = (id, index) => e => {
    let quantity = e.target.value;

    dispatch({
      type: 'UPDATE_RAWMATERIAL_PRICE',
      id1: id,
      index1: index,
      value: quantity
    });
  };

  const handleRateChange = (id, index) => e => {
    let rate = e.target.value;

    dispatch({
      type: 'UPDATE_RAWMATERIAL_RATE',
      id1: id,
      rawMaterialIndex: index,
      value: rate
    });
  };

  return (
    <RecipeManagementContainer>
      <FormSectionHading sectionName="Raw Materials" />

      <GridLabel />
      <TransitionGroup>
        {recipeRawMaterials.map((material, index) => {
          return (
            <Transition
              timeout={800}
              appear
              key={`${material._id}${material.uniueId}`}
              mountOnEnter
              unmountOnExit
              onEntering={node => {
                anime({
                  targets: node,
                  opacity: [0, 1],
                  height: 'auto',
                  duration: 800,
                  easing: 'easeOutQuad'
                });
              }}
              onExiting={node => {
                console.log(node);
                anime({
                  targets: node,
                  duration: 400,
                  height: 0,
                  easing: 'easeInSine'
                });
              }}
            >
              <RawMaterialDetailsCard
                createRef={addToRefs}
                key={index}
                index={index}
                name={material.name}
                handleRawMaterialNameChange={handleRawMaterialNameChange}
                quantityInRecipe={material.quantityInRecipe}
                materialId={material._id}
                handleQuantityChange={handleQuantityChange}
                recipeUnit={material.recipeUnit}
                rate={material.rate}
                handleRateChange={handleRateChange}
                baseQuantity={material.baseQuantity}
                baseUnit={material.baseUnit}
                animateBeforeExit={material.animateBeforeExit}
                handleRemoveRawMaterial={handleRemoveRawMaterial}
              />
            </Transition>
          );
        })}
      </TransitionGroup>

      <TotalRawMaterialCost />
    </RecipeManagementContainer>
  );
};

export default RecipeRawMaterials;
