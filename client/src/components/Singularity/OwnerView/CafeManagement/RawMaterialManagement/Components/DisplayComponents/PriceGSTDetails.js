import React from 'react';

import {
  useRawMaterialsState,
  useRawMaterialsDispatch
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';

import {
  RawMMainContainer,
  GSTOptionContainer,
  PriceOptionContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import FormSectionHeading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';

import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import { ErrorText } from 'styles/Singularity/OwnerView/Authentication/index.js';

import {
  requireRawMaterialGST,
  requiredRawMaterialPrice,
  requiredRawMaterialStatePriceInfo
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/ErrorMessages/index.js';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index';

const PriceGSTDetails = () => {
  const {
    GSTOptionsData,
    rawMaterialGST,
    rawMaterialStatePrice,
    rawMaterialStatePriceGST,
    priceGSTOptionsData,
    rawMaterialGSTPercent,
    requiredErrorFlag
  } = useRawMaterialsState();

  const dispatch = useRawMaterialsDispatch();

  const handleRawMaterialGSTOption = option => {
    const { GSTDisplay, GSTPercentage } = option;

    dispatch({
      type: 'UPDATE_GST',
      payload: { GSTDisplay, GSTPercentage }
    });
  };

  const handleRawMPriceGSTDetails = option => {
    const { optionValue } = option;
    dispatch({
      type: 'UPDATE_PRICEGSTDETAILS',
      payload: { optionValue }
    });
  };

  return (
    <RawMMainContainer>
      <FormSectionHeading
        sectionName="GST"
        isRequiredError={requiredErrorFlag['rawMaterialGST']}
        requiredErrorText={requireRawMaterialGST}
      />
      <GSTOptionContainer>
        {GSTOptionsData.map((option, index) => {
          return (
            <StyledRadioButton
              display={option.GSTDisplay}
              selected={rawMaterialGST === `${option.GSTDisplay}`}
              onClick={() => handleRawMaterialGSTOption(option)}
            />
          );
        })}
      </GSTOptionContainer>
      <PartialWidthDivider />
      <StyledTextBoxLabel
        name={rawMaterialStatePrice}
        value={rawMaterialStatePrice}
        onChange={e => {
          dispatch({
            type: 'UPDATE_FIELD',
            payload: { input: 'rawMaterialStatePrice', value: e.target.value }
          });
        }}
        text="Price (Rs.)"
        isError={requiredErrorFlag['rawMaterialStatePrice']}
        requiredErrorText={requiredRawMaterialPrice}
      />
      <PartialWidthDivider />
      {rawMaterialGSTPercent == 0 ? null : (
        <>
          <CenterAlignedColumnContainer>
            {requiredErrorFlag['rawMaterialStatePriceGST'] ? (
              <ErrorText id="required-field-message">
                {requiredRawMaterialStatePriceInfo}
              </ErrorText>
            ) : null}
            <PriceOptionContainer>
              {priceGSTOptionsData.map((option, index) => {
                return (
                  <StyledRadioButton
                    display={option.OptionDisplay}
                    selected={
                      rawMaterialStatePriceGST === `${option.optionValue}`
                    }
                    onClick={() => handleRawMPriceGSTDetails(option)}
                  />
                );
              })}
            </PriceOptionContainer>
          </CenterAlignedColumnContainer>
          <PartialWidthDivider />
        </>
      )}
    </RawMMainContainer>
  );
};

export default PriceGSTDetails;
