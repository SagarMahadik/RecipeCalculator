import React, { useContext } from 'react';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import { rawMaterialManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';

import { RawMMainContainer } from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';

const RawMaterialDetails = () => {
  const {
    rawMaterialName,
    brandName,
    handleChangeFor,
    requiredErrorFlag
  } = useRawMaterialsState();

  const dispatch = useRawMaterialsDispatch();

  const RawMaterialContext = useContext(rawMaterialManagementContext);

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
        requiredErrorText={'Please enter raw material name'}
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
