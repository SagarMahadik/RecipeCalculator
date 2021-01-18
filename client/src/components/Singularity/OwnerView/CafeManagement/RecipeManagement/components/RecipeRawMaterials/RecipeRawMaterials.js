import React, { useContext } from 'react';

import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

import GridLabel from './GridLabels.js';
import RawMaterialDetailsCard from './RawMaterialDetailsCard';
import TotalRawMaterialCost from './TotalRawMaterialCost';
import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

import FormSectionHading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';

import { AnimatePresence } from 'framer-motion';
import { useRecipeDispatch } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';

import Anime from '@mollycule/react-anime';
import { Transition, TransitionGroup } from 'react-transition-group';

import { motion } from 'framer-motion';

const RecipeRawMaterials = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const { recipeRawMaterials } = RecipeManagementContext;

  const dispatch = useRecipeDispatch();

  const handleRemoveRawMaterial = id => {
    dispatch({
      type: 'REMOVE_RAWMATERIAL',
      payload: id
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

  const handleRateChange = id => e => {
    let rate = e.target.value;

    dispatch({
      type: 'UPDATE_RAWMATERIAL_RATE',
      id1: id,
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
            <Anime
              appear
              onEntering={{
                opacity: [0.5, 1],
                easing: 'linear',
                duration: 800
              }}
              onExiting={{
                translateX: '-100%',
                easing: 'easeInOutQuad',
                duration: 1000
              }}
              duration={800}
            >
              <div>
                <RawMaterialDetailsCard
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
                  handleRemoveRawMaterial={handleRemoveRawMaterial}
                />
              </div>
            </Anime>
          );
        })}
      </TransitionGroup>
      <TotalRawMaterialCost />
    </RecipeManagementContainer>
  );
};

export default RecipeRawMaterials;
