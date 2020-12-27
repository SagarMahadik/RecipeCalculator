import React from 'react';
import {
  RawMMainContainer,
  RawMTypeContainer,
  RawMTypeOptionContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import FormSectionHeading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';

import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';

const RawMaterialTypeQuantity = () => {
  const {
    rawMaterialTypeDetails,
    rawMaterialType,
    handleChangeForRawMaterialType,
    rawMaterialOptionData,
    rawMaterialDisplay,
    requiredErrorFlag
  } = useRawMaterialsState();

  const dispatch = useRawMaterialsDispatch();

  const handleTypeOfRawMaterialOption = option => {
    const { displayRateUnit, baseQuantity, baseUnit } = option;

    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { displayRateUnit, baseQuantity, baseUnit }
    });
  };

  return (
    <RawMMainContainer>
      <FormSectionHeading
        sectionName="Type of Raw Material"
        isRequiredError={requiredErrorFlag['rawMaterialType']}
        requiredErrorText={'Please select type of Raw Material'}
      />
      <RawMTypeContainer>
        {rawMaterialTypeDetails.map((detail, index) => {
          return (
            <StyledRadioButton
              value={detail.tag}
              selected={rawMaterialType === `${detail.tag}`}
              onClick={handleChangeForRawMaterialType}
              display={detail.type}
            />
          );
        })}
      </RawMTypeContainer>
      <PartialWidthDivider />

      {rawMaterialType && (
        <>
          <FormSectionHeading
            sectionName="Quantity"
            isRequiredError={requiredErrorFlag['rawMaterialBaseQuanitiy']}
            requiredErrorText={'Please select Base quantity'}
          />
          <RawMTypeOptionContainer>
            {rawMaterialOptionData
              .filter(item => item.type === `${rawMaterialType}`)
              .sort((a, b) => a.baseQuantity - b.baseQuantity)
              .map((detail, index) => {
                return (
                  <StyledRadioButton
                    value={detail.displayRateUnit}
                    selected={
                      rawMaterialDisplay === `${detail.displayRateUnit}`
                    }
                    onClick={() => {
                      handleTypeOfRawMaterialOption(detail);
                    }}
                    display={detail.displayRateUnit}
                  />
                );
              })}
          </RawMTypeOptionContainer>
          <PartialWidthDivider />
        </>
      )}
    </RawMMainContainer>
  );
};

export default RawMaterialTypeQuantity;
