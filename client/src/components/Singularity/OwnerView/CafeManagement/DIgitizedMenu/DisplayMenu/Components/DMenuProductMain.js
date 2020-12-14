import React from 'react';
import DMenuDisplayState from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/DMenuDisplayState.js';
import DmenuProducts from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/DmenuProducts.js';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';

const DMenuProductMain = () => {
  return (
    <DMenuDisplayState>
      <DmenuProducts />
    </DMenuDisplayState>
  );
};

export default DMenuProductMain;
