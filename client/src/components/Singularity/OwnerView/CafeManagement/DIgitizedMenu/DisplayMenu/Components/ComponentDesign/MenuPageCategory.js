import React from 'react';

import {
  MenuPageCategoryLine,
  Category,
  DMenuCategoryContainer
} from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu/index.js';

import {
  CenterAlignedColumnContainer,
  RowContainer,
  LeftAlignedRowContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

const MenuPageCategory = props => {
  return (
    <>
      <CenterAlignedColumnContainer
        style={{ background: 'rgba(0,0,0,0)', height: '20px' }}
      />
      <DMenuCategoryContainer backGroundcolor="rgba(0,0,0,0)">
        <MenuPageCategoryLine />
        <CenterAlignedColumnContainer
          style={{
            marginTop: '-24px',
            background: '#2a2a2a',
            width: 'auto',
            padding: '5px'
          }}
        >
          <Category>{props.category}</Category>
        </CenterAlignedColumnContainer>
      </DMenuCategoryContainer>
    </>
  );
};

export default MenuPageCategory;
