import React, { useContext } from 'react';

import HideIcon from 'components/Singularity/ApplicationView/Icons/HideIcon.js';
import { RotateIcon } from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index.js';
import {
  QuoteManagementContainer,
  BasicRecipeInformationContainer,
  BasicRecipeName,
  TotalBasicRecipeUnits,
  TotalBasicRecipeCost,
  ProductInformationLabelContainer,
  LabelText,
  ProductInformationContainer,
  ProductName,
  TotalQuantity,
  TotalCost,
  LabelGridContainenr,
  GridContainer
} from 'styles/Singularity/OwnerView/CafeManagement/QuoteGeneration/index.js';

import {
  RawMaterial,
  QuantityDisplayProduction,
  QuantityUnit,
  Quantity,
  BaseRateUnit,
  CostOfRawMaterial
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index.js';

import quoteGenerationContext from 'components/Singularity/OwnerView/CafeManagement/QuoteGeneration/State/quoteGenerationContext.js';

const QuoteBasicRecipe = ({ basicRecipes, index, unit }) => {
  console.log(basicRecipes);

  const QuoteGenerationContext = useContext(quoteGenerationContext);

  const { handleBasicRecipeDisplay } = QuoteGenerationContext;

  return (
    <>
      {basicRecipes.map((detail, detailIndex) => {
        return detail.details.map((basicRecipe, basicRecipeIndex) => {
          return (
            <>
              <BasicRecipeInformationContainer key={basicRecipeIndex}>
                <BasicRecipeName>{basicRecipe.name}</BasicRecipeName>
                <TotalBasicRecipeUnits
                  type="number"
                  value={detail.unitInRecipe}
                />
                <TotalBasicRecipeCost>
                  Rs. {detail.totalBRRMCOST}
                </TotalBasicRecipeCost>
                <RotateIcon clicked={detail.showItem}>
                  <HideIcon
                    onClick={() => handleBasicRecipeDisplay(index, detailIndex)}
                  />
                </RotateIcon>
              </BasicRecipeInformationContainer>
              {detail.showItem ? (
                <>
                  <LabelGridContainenr>
                    <LabelText>Raw Material</LabelText>
                    <LabelText>Quantity</LabelText>
                    <LabelText>Rate</LabelText>
                    <LabelText>Cost Rs.</LabelText>
                  </LabelGridContainenr>

                  {basicRecipe.details.map((rawMaterial, rawMaterialIndex) => {
                    return (
                      <GridContainer isEven={rawMaterialIndex % 2 === 0}>
                        <RawMaterial>{rawMaterial.name}</RawMaterial>
                        <div
                          style={{
                            display: 'flex',
                            flexDirecction: 'row',
                            alignItems: 'baseline',
                            justifyContent: 'center',
                            marginLeft: '-10px'
                          }}
                        >
                          <QuantityDisplayProduction
                            isEven={rawMaterialIndex % 2 === 0}
                          >
                            {Math.round(rawMaterial.quantityInRecipe)}
                          </QuantityDisplayProduction>

                          <QuantityUnit>{rawMaterial.recipeUnit}</QuantityUnit>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirecction: 'row',
                            alignItems: 'baseline',
                            justifyContent: 'center',
                            padding: 0
                          }}
                        >
                          <Quantity type="number" value={rawMaterial.rate} />
                          <BaseRateUnit>
                            /{rawMaterial.baseQuantity}
                            {rawMaterial.baseUnit}
                          </BaseRateUnit>
                        </div>
                        <CostOfRawMaterial>
                          {Math.round(rawMaterial.costOfRawMaterial)}
                        </CostOfRawMaterial>
                      </GridContainer>
                    );
                  })}
                </>
              ) : null}
            </>
          );
        });
      })}
    </>
  );
};

export default QuoteBasicRecipe;
