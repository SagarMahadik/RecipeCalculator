import React from 'react';

import { RawMMainContainer } from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import StyledTextParagraphLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextParagraph.js';
import {
  useSupplierDetailsState,
  useSupplierDetailsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/SupplierDetails/State/SupplierDetailsState.js';
const RawMaterialDetails = () => {
  const {
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber,
    requiredFieldsError
  } = useSupplierDetailsState();
  const dispatch = useSupplierDetailsDispatch();

  return (
    <RawMMainContainer>
      <StyledTextBoxLabel
        name={supplierName}
        value={supplierName}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'supplierName', value: e.target.value }
          });
        }}
        isError={requiredFieldsError['supplierName']}
        requiredErrorText={'Please enter supplier name'}
        text="Supplier Name"
        type="text"
      />
      <StyledTextBoxLabel
        name={supplierPersonDetails}
        value={supplierPersonDetails}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'supplierPersonDetails', value: e.target.value }
          });
        }}
        isError={requiredFieldsError['supplierPersonDetails']}
        requiredErrorText={'Please enter supplier person name'}
        text="Contact Person Name"
        type="text"
      />
      <StyledTextBoxLabel
        name={supplierMobileNumber}
        value={supplierMobileNumber}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'supplierMobileNumber', value: e.target.value }
          });
        }}
        text="Mobile Number"
        type="number"
      />
      <StyledTextParagraphLabel
        name={supplierAddress}
        value={supplierAddress}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'supplierAddress', value: e.target.value }
          });
        }}
        text="Address"
        type="text"
      />
      <StyledTextBoxLabel
        name={supplierPinCode}
        value={supplierPinCode}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'supplierPinCode', value: e.target.value }
          });
        }}
        text="Pin Code"
        type="number"
      />
      <StyledTextBoxLabel
        name={supplierGSTNumber}
        value={supplierGSTNumber}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'supplierGSTNumber', value: e.target.value }
          });
        }}
        text="GST Number"
        type="text"
      />
      <PartialWidthDivider />
    </RawMMainContainer>
  );
};

export default RawMaterialDetails;
