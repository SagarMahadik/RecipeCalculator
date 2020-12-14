import React, { useContext } from 'react';

import { RawMMainContainer } from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import StyledTextParagraphLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextParagraph.js';
import supplierDetailsContext from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/supplierDetailsContext.js';
const RawMaterialDetails = () => {
  const SupplierDetailsContext = useContext(supplierDetailsContext);

  const {
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber,
    handleChangeFor
  } = SupplierDetailsContext;

  return (
    <RawMMainContainer>
      <StyledTextBoxLabel
        name={supplierName}
        value={supplierName}
        onChange={handleChangeFor('supplierName')}
        text="Supplier Name"
        type="text"
      />
      <StyledTextBoxLabel
        name={supplierPersonDetails}
        value={supplierPersonDetails}
        onChange={handleChangeFor('supplierPersonDetails')}
        text="Contact Person Name"
        type="text"
      />
      <StyledTextBoxLabel
        name={supplierMobileNumber}
        value={supplierMobileNumber}
        onChange={handleChangeFor('supplierMobileNumber')}
        text="Mobile Number"
        type="number"
      />
      <StyledTextParagraphLabel
        name={supplierAddress}
        value={supplierAddress}
        onChange={handleChangeFor('supplierAddress')}
        text="Address"
        type="text"
      />
      <StyledTextBoxLabel
        name={supplierPinCode}
        value={supplierPinCode}
        onChange={handleChangeFor('supplierPinCode')}
        text="Pin Code"
        type="number"
      />
      <StyledTextBoxLabel
        name={supplierGSTNumber}
        value={supplierGSTNumber}
        onChange={handleChangeFor('supplierGSTNumber')}
        text="GST Number"
        type="text"
      />
      <PartialWidthDivider />
    </RawMMainContainer>
  );
};

export default RawMaterialDetails;
