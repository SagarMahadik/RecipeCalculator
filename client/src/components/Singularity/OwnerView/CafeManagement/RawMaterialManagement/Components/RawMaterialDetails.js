import React, { useContext } from 'react';
import rawMaterialManagementContext from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import { RawMMainContainer } from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';

const RawMaterialDetails = () => {
  const RawMaterialManagementContext = useContext(rawMaterialManagementContext);

  const {
    rawMaterialName,
    brandName,
    handleChangeFor
  } = RawMaterialManagementContext;
  return (
    <RawMMainContainer>
      <StyledTextBoxLabel
        name={rawMaterialName}
        value={rawMaterialName}
        onChange={handleChangeFor('rawMaterialName')}
        text="Raw Material"
      />
      <StyledTextBoxLabel
        name={brandName}
        value={brandName}
        onChange={handleChangeFor('brandName')}
        text="Brand Name"
      />
      <PartialWidthDivider />
    </RawMMainContainer>
  );
};

export default RawMaterialDetails;
