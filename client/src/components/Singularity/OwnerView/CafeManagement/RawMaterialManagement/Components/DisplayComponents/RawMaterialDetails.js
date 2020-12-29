import React from 'react';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import { RawMMainContainer } from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';

import { requiredRawMaterialName } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/ErrorMessages';

const RawMaterialDetails = () => {
  const {
    rawMaterialName,
    brandName,
    requiredErrorFlag
  } = useRawMaterialsState();

  const dispatch = useRawMaterialsDispatch();

  return (
    <RawMMainContainer>
      <StyledTextBoxLabel
        name={rawMaterialName}
        value={rawMaterialName}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'rawMaterialName', value: e.target.value }
          });
        }}
        isError={requiredErrorFlag['rawMaterialName']}
        requiredErrorText={requiredRawMaterialName}
        text="Raw Material"
      />
      <StyledTextBoxLabel
        name={brandName}
        value={brandName}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'brandName', value: e.target.value }
          });
        }}
        text="Brand Name"
      />
      <PartialWidthDivider />
    </RawMMainContainer>
  );
};

export default RawMaterialDetails;
