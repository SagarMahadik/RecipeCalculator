import React, { useContext } from 'react';
import rawMaterialManagementContext from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import {
  RawMMainContainer,
  GSTOptionContainer,
  PriceOptionContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import FormSectionHeading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';

import StyledRadioButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledRadioButton.js';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';

const PriceGSTDetails = () => {
  const RawMaterialManagementContext = useContext(rawMaterialManagementContext);

  const {
    GSTOptionsData,
    rawMaterialGST,
    handleRawMaterialGSTOption,
    rawMaterialStatePrice,
    handleChangeFor,
    rawMaterialStatePriceGST,
    priceGSTOptionsData,
    handleRawMPriceGSTDetails,
    rawMaterialGSTPercent,
    rawMaterialGSTNumber
  } = RawMaterialManagementContext;
  return (
    <RawMMainContainer>
      <FormSectionHeading sectionName="GST" />
      <GSTOptionContainer>
        {GSTOptionsData.sort((a, b) => a.GSTPercentage - b.GSTPercentage).map(
          (option, index) => {
            return (
              <StyledRadioButton
                display={option.GSTDisplay}
                selected={rawMaterialGST === `${option.GSTDisplay}`}
                onClick={() => handleRawMaterialGSTOption(option)}
              />
            );
          }
        )}
      </GSTOptionContainer>
      <PartialWidthDivider />
      <StyledTextBoxLabel
        name={rawMaterialStatePrice}
        value={rawMaterialStatePrice}
        onChange={handleChangeFor('rawMaterialStatePrice')}
        text="Price (Rs.)"
      />
      <PartialWidthDivider />
      {rawMaterialGSTPercent == 0 ? null : (
        <>
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
          <PartialWidthDivider />
        </>
      )}
    </RawMMainContainer>
  );
};

export default PriceGSTDetails;
