import React from 'react';

import {
  MenuItemContainer,
  MenuItemText,
  DMenuProductContainer
} from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu/index';

const MenuPageProduct = props => {
  return (
    <DMenuProductContainer>
      <MenuItemContainer backGroundcolor="rgba(0,0,0,0.8)">
        <MenuItemText>{props.productName}</MenuItemText>
        <MenuItemText>Rs.{props.productPrice}</MenuItemText>
      </MenuItemContainer>
    </DMenuProductContainer>
  );
};

export default MenuPageProduct;
