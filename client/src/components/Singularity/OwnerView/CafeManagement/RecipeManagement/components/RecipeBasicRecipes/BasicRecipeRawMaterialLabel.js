import React from 'react';

import {
  RawMaterial,
  BaseRate,
  CostOfRawMaterial,
  QuantityDisplay,
  LabelGridContainenr
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';

const BasicRecipeRawMaterialLabel = () => {
  return (
    <LabelGridContainenr>
      <RawMaterial style={{ fontWeight: 'bold' }}>Raw Material</RawMaterial>
      <QuantityDisplay style={{ fontWeight: 'bold' }}>Quantity</QuantityDisplay>

      <BaseRate style={{ fontWeight: 'bold' }}>Rate </BaseRate>

      <CostOfRawMaterial style={{ fontWeight: 'bold' }}>
        Cost Rs.
      </CostOfRawMaterial>
      <h6 style={{ margin: '0', opacity: '0' }}>Delete</h6>
    </LabelGridContainenr>
  );
};

export default BasicRecipeRawMaterialLabel;
