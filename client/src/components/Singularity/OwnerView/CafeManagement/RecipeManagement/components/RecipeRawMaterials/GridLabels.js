import React from 'react';

import {
  RawMaterial,
  BaseRate,
  CostOfRawMaterial,
  GridContainenr,
  QuantityDisplay
} from 'styles/Singularity/OwnerView/CafeManagement/RecipeManagement';
const GridLabels = () => {
  return (
    <GridContainenr>
      <RawMaterial style={{ fontWeight: 'bold' }}>Raw Material</RawMaterial>
      <QuantityDisplay style={{ fontWeight: 'bold' }}>Quantity</QuantityDisplay>

      <BaseRate style={{ fontWeight: 'bold' }}>Rate </BaseRate>

      <CostOfRawMaterial style={{ fontWeight: 'bold' }}>Cost</CostOfRawMaterial>
      <h6 style={{ margin: '0', opacity: '0' }}>Delete</h6>
    </GridContainenr>
  );
};

export default GridLabels;
