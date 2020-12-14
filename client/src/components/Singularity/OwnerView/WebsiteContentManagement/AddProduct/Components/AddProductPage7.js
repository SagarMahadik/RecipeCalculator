import React, { Fragment, useEffect, useContext } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import {
  FullWidthDivider,
  PartialWidthDivider
} from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  IconCheckBoxRound,
  CheckBoxIcon,
  CheckBoxIconName,
  IconCheckBoxRoundButton,
  HiddenCheckbox
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';
import {
  ActionButton,
  ButtonText,
  ButtonContainer,
  PrevoiusButton
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';

import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import {
  CenterAlignedColumnContainer,
  FlexRowContainer,
  FlexColumnContainer,
  FormSectionNameContainer
} from 'styles/Singularity/ApplicationStyles/ContainerStyles';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import {
  ProductImage,
  ProductDescription,
  ProductAdditionalInformationContainer,
  AdditionalInformation,
  MainAdditionalInformation,
  ProductNamePriceContainer,
  IconProductnameContainer
} from 'styles/Singularity/OwnerView/ReviewDetails';

import VegIcon from 'components/Singularity/ApplicationView/VegIcon.js';
import NonVegIcon from 'components/Singularity/ApplicationView/NonVegIcon.js';
import DoneIcon from 'components/Singularity/ApplicationView/DoneIcon';
const AddProductPage7 = () => {
  const AddProductContext = useContext(addProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    filesrc,
    setNutrientData,
    productName,
    productDescription,
    additionalInformation,
    productPrice,
    selectedAddOnItemItems,
    cuisine,
    onSubmit,
    previousStep,
    isComplete
  } = AddProductContext;

  let isVeg = false;
  if (cuisine === 'veg') {
    isVeg = true;
  }

  if (isComplete) {
    return <DoneIcon />;
  }

  return (
    <Fragment>
      <FlexRowContainer width="350px">
        <ProductImage src={filesrc} />
        <MainAdditionalInformation>
          <IconProductnameContainer width="100px">
            {isVeg ? <VegIcon /> : <NonVegIcon />}
            <PTSansText fontSize="14px" style={{ marginLeft: '20px' }}>
              {productName}
            </PTSansText>
          </IconProductnameContainer>

          <ProductDescription>
            <PTSansText fontSize="12px" color="#BDBDBD">
              {productDescription}
            </PTSansText>
          </ProductDescription>
          <ProductAdditionalInformationContainer>
            {additionalInformation.map((information, index) => {
              return (
                <FlexColumnContainer>
                  <IconCheckBoxRound style={{ height: '30px', width: '30px' }}>
                    <CheckBoxIcon
                      src={information.additionalInformationIconURL}
                      style={{ height: '20px', width: '20px' }}
                    />
                  </IconCheckBoxRound>
                  <AdditionalInformation>
                    <PTSansText fontSize="9px">
                      {information.additionalInformation}
                    </PTSansText>
                  </AdditionalInformation>
                </FlexColumnContainer>
              );
            })}
          </ProductAdditionalInformationContainer>
        </MainAdditionalInformation>
      </FlexRowContainer>

      <FullWidthDivider style={{ marginTop: '15px' }} />
      <ProductNamePriceContainer>
        <PTSansText fontSize="14px" lineHeight="18px">
          {productName}
        </PTSansText>
        <PTSansText fontSize="14px" lineHeight="18px">
          {productPrice}
        </PTSansText>
      </ProductNamePriceContainer>
      <FullWidthDivider />
      <CenterAlignedColumnContainer>
        <FlexRowContainer width="310px" marginTop="10px">
          {selectedAddOnItemItems.map((item, index) => {
            {
              return (
                <IconCheckBoxRoundButton>
                  <IconCheckBoxRound>
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

        <ButtonContainer>
          <PrevoiusButton width="118px" value="submit" onClick={previousStep}>
            <ButtonText>Previous</ButtonText>
          </PrevoiusButton>
          <ActionButton width="100px" onClick={onSubmit}>
            <ButtonText>Done</ButtonText>
          </ActionButton>
        </ButtonContainer>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default AddProductPage7;
