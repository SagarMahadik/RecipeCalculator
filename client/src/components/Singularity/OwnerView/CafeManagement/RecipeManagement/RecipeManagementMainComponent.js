import React from 'react';
import { RecipeManagementState } from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/state/RecipeManagementState.js';
import RecipeManagement from 'components/Singularity/OwnerView/CafeManagement/RecipeManagement/components/RecipeManagement.js';

const RecipeManagementMainComponent = () => {
  return (
    <RecipeManagementState>
      <RecipeManagement />
    </RecipeManagementState>
  );
};

export default RecipeManagementMainComponent;
