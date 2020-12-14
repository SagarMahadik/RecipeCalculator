import React from 'react';
import {
  LabelGridContainenr,
  LabelText,
  GridContainer,
  DetailsContainer
} from 'styles/Singularity/OwnerView/CafeManagement/QuoteGeneration';

import {
  RawMaterial,
  QuantityDisplayProduction,
  QuantityUnit,
  Quantity,
  BaseRateUnit,
  CostOfRawMaterial
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement/index.js';
const QuoteRawMaterials = ({ rawMaterials, unit }) => {
  return (
    <>
      <LabelGridContainenr>
        <LabelText>Raw Material</LabelText>
        <LabelText>Quantity</LabelText>
        <LabelText>Rate</LabelText>
        <LabelText>Cost Rs.</LabelText>
      </LabelGridContainenr>
      {rawMaterials.map((rawMaterial, rawMaterialIndex) => {
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
              <QuantityDisplayProduction isEven={rawMaterialIndex % 2 === 0}>
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
  );
};

export default QuoteRawMaterials;
