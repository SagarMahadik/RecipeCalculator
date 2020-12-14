import React, { useContext } from 'react';
import rawMaterialManagementContext from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import {
  RawMMainContainer,
  RawMTypeContainer,
  RawMTypeOptionContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import FormSectionHeading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';

import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';

const RawMaterialTypeQuantity = () => {
  const RawMaterialManagementContext = useContext(rawMaterialManagementContext);

  const {
    rawMaterialTypeDetails,
    rawMaterialType,
    handleChangeForRawMaterialType,
    rawMaterialOptionData,
    rawMaterialDisplay,
    handleTypeOfRawMaterialOption
  } = RawMaterialManagementContext;

  return (
    <RawMMainContainer>
      <FormSectionHeading sectionName="Type of Raw Material" />
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
          <FormSectionHeading sectionName="Quantity" />
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
