import React from 'react';
import RecipeManangementState from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';
import RecipeManagement from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeManagement.js';

const RecipeManagementMainComponent = () => {
  return (
    <RecipeManangementState>
      <RecipeManagement />
    </RecipeManangementState>
  );
};

export default RecipeManagementMainComponent;
