import React, { Fragment, useEffect, useContext } from 'react';

import { PartialWidthDivider } from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  IconCheckBoxRound,
  CheckBoxIcon,
  CheckBoxIconName,
  IconCheckBoxRoundButton,
  HiddenCheckbox
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';

import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import {
  CenterAlignedColumnContainer,
  FlexRowContainer,
  FormSectionNameContainer
} from 'styles/Singularity/ApplicationStyles/ContainerStyles';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

const AddProductFourthPage = React.forwardRef((props, ref) => {
  const AddProductContext = useContext(addProductContext);

  const {
    addOnFlavourData,
    getAddOnFlavourData,
    getProductVariantData,
    handleAddOnFlavourChange,
    productVariantData,
    handleProductVariantChange
  } = AddProductContext;

  useEffect(() => {
    if (addOnFlavourData.length === 0) {
      getAddOnFlavourData();
    }
    if (productVariantData.length === 0) {
      getProductVariantData();
    }
  }, []);

  return (
    <Fragment>
      <CenterAlignedColumnContainer ref={ref}>
        <FormSectionNameContainer style={{ marginTop: '5px' }}>
          <PTSansText fontSize="16px" color="#DAA520">
            Add on
          </PTSansText>
        </FormSectionNameContainer>
        <FlexRowContainer width="310px" marginTop="-30px">
          {addOnFlavourData.map((item, index) => {
            {
              return (
                <IconCheckBoxRoundButton>
                  <HiddenCheckbox
                    key={index}
                    name={item.itemName}
                    value={item.itemName}
                    onChange={e => handleAddOnFlavourChange(e)}
                  />
                  <IconCheckBoxRound checked={item.isChecked}>
                    <CheckBoxIcon src={item.itemIconURL} />
                  </IconCheckBoxRound>
                  <InputLabel for={item.itemName} style={{ marginTop: '15px' }}>
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px" lineHeight="18px">
                        {item.itemName}
                      </PTSansText>
                    </CheckBoxIconName>
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px">
                        <span>Rs. </span>
                        {item.itemPrice}
                      </PTSansText>
                    </CheckBoxIconName>
                  </InputLabel>
                </IconCheckBoxRoundButton>
              );
            }
          })}
        </FlexRowContainer>
        <PartialWidthDivider />
        <FormSectionNameContainer style={{ marginTop: '5px' }}>
          <PTSansText fontSize="16px" color="#DAA520">
            Product Variant
          </PTSansText>
        </FormSectionNameContainer>
        <FlexRowContainer width="310px" marginTop="30px">
          {productVariantData.map((item, index) => {
            {
              return (
                <IconCheckBoxRoundButton>
                  <HiddenCheckbox
                    key={index}
                    name={item.additionalInformation}
                    value={item.additionalInformation}
                    onChange={e => handleProductVariantChange(e)}
                  />
                  <IconCheckBoxRound checked={item.isChecked}>
                    <CheckBoxIcon src={item.additionalInformationIconURL} />
                  </IconCheckBoxRound>
                  <InputLabel
                    for={item.additionalInformation}
                    style={{ marginTop: '15px' }}
                  >
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px" lineHeight="18px">
                        {item.additionalInformation}
                      </PTSansText>
                    </CheckBoxIconName>
                  </InputLabel>
                </IconCheckBoxRoundButton>
              );
            }
          })}
        </FlexRowContainer>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
});

export default AddProductFourthPage;
