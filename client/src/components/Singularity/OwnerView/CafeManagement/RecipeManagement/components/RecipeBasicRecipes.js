import React, { useContext } from 'react';
import AddIcon from 'components/Singularity/ApplicationView/Icons/AddIcon.js';
import { RecipeManagementContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import BasicRecipeDisplay from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeBasicRecipes/BasicRecipeDisplay.js';
import { recipeManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/recipeManagementContext.js';
import { AnimationContainer } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
import SearchBoxResults from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Search/SearchBoxResults.js';
import { AnimatePresence } from 'framer-motion';
import BasicRecipeRawMaterialLabel from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeBasicRecipes/BasicRecipeRawMaterialLabel.js';
import BasicRecipeTotalQtyCost from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeBasicRecipes/BasicRecipeTotalQtyCost.js';
import TotalBasicRecipeRMQty from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeBasicRecipes/TotalBasicRecipeRMQty.js';
import BasicRecipesRawMaterialDetails from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeBasicRecipes/BasicRecipesRawMaterialDetails.js';
import BasicRecipeCardElements from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/Animations/BasicRecipeCardElements.js';

import Anime from '@mollycule/react-anime';
import { Transition, TransitionGroup } from 'react-transition-group';

import anime from 'animejs/lib/anime.es.js';

const RecipeBasicRecipies = () => {
  const RecipeManagementContext = useContext(recipeManagementContext);
  const {
    recipeBasicRecipes,
    handleBasicRecipeMSearchFilter
  } = RecipeManagementContext;

  return (
    <RecipeManagementContainer>
      <TransitionGroup children>
        {recipeBasicRecipes.length > 0
          ? recipeBasicRecipes.map((material, index) => {
              return (
                <Transition
                  timeout={800}
                  appear
                  key={`${material.name}${material.uniueId}`}
                  mountOnEnter
                  unmountOnExit
                  onEntering={node => {
                    anime({
                      targets: node,
                      opacity: [0, 1],
                      height: 'auto',
                      duration: 800,
                      easing: 'easeInOutBounce'
                    });
                  }}
                  onExiting={node => {
                    material.showItem
                      ? anime({
                          targets: node,
                          duration: 800,
                          opacity: 0,
                          scale: 0,
                          height: 0,
                          easing: 'easeInQuint'
                        })
                      : anime({
                          targets: node,
                          duration: 600,
                          height: 0,
                          opacity: [0.3, 0],
                          easing: 'easeInQuint'
                        });
                  }}
                >
                  <RecipeManagementContainer key={index}>
                    <BasicRecipeDisplay
                      name={material.name}
                      unitPerBaseQuantity={material.unitPerBaseQuantity}
                      showItem={material.showItem}
                      id={material._id}
                      totalCostOfRMInBR={material.totalCostOfRMInBR}
                      basicRecipeBaseQuantity={material.baseQuantity}
                      index={index}
                    />
                    <AnimatePresence>
                      {material.showItem ? (
                        <>
                          {material.showSearchBox && (
                            <SearchBoxResults
                              arrayIndex={index}
                              basicRecipeID={material._id}
                            />
                          )}
                          <BasicRecipeCardElements delay={0.2}>
                            <BasicRecipeRawMaterialLabel />
                          </BasicRecipeCardElements>

                          {material.details.map((item, index1) => {
                            return (
                              <>
                                <BasicRecipeCardElements delay={0.4}>
                                  <BasicRecipesRawMaterialDetails
                                    basicRecipeName={material.name}
                                    basicRecipeIndex={index}
                                    basicRecipeID={material._id}
                                    rawMaterialName={item.name}
                                    rawMaterialIndex={index1}
                                    rawMaterialID={item._id}
                                    hideRM={item.hiddeRM}
                                    rawMaterialRecipeUnit={item.recipeUnit}
                                    rawMaterialQtyInRecipe={
                                      item.quantityInRecipe
                                    }
                                    rawMaterialRate={item.rate}
                                    rawMaterialBaseQty={item.baseQuantity}
                                    rawmaterialbaseUnit={item.baseUnit}
                                    rawmaterialQtyPerUnit={item.quantityPerUnit}
                                    basicRecipeUnitPerbaseQty={
                                      material.unitPerBaseQuantity
                                    }
                                  />
                                </BasicRecipeCardElements>
                              </>
                            );
                          })}
                          {material.showAddIcon && (
                            <AddIcon
                              onClick={() =>
                                handleBasicRecipeMSearchFilter(material._id)
                              }
                            />
                          )}
                          <BasicRecipeCardElements delay={0.5}>
                            <BasicRecipeTotalQtyCost
                              basicRecipeName={material.name}
                              basicRecipeCostofRM={material.totalCostOfRMInBR}
                              basicRecipeRMTotalQty={
                                material.totalRMQuantityInBR
                              }
                            />
                          </BasicRecipeCardElements>
                        </>
                      ) : null}
                    </AnimatePresence>
                  </RecipeManagementContainer>
                </Transition>
              );
            })
          : null}
      </TransitionGroup>

      <PartialWidthDivider />
      <TotalBasicRecipeRMQty />
      <PartialWidthDivider />
    </RecipeManagementContainer>
  );
};

export default RecipeBasicRecipies;
