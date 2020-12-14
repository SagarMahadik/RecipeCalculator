import React from 'react';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';

import {
  MenuPageSubCategoryContainer,
  SubCategory,
  DMenuSubCategoryContainer,
  DMenuCategoryContainer
} from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu/index.js';

const MenuPageSubCategory = props => {
  return (
    <DMenuSubCategoryContainer backGroundcolor="rgba(0,0,0,0)">
      <CenterAlignedColumnContainer
        style={{ width: '90%', background: 'rgba(0,0,0,0)' }}
      >
        <MenuPageSubCategoryContainer>
          <SubCategory>{props.subCategory}</SubCategory>
        </MenuPageSubCategoryContainer>
      </CenterAlignedColumnContainer>
    </DMenuSubCategoryContainer>
  );
};

export default MenuPageSubCategory;
