import React, { Fragment, useEffect, useContext } from 'react';

import {
  TextBox,
  TextParagraph,
  UplaodButton,
  ItemDescription,
  IconBorderCircle,
  HiddenCheckbox,
  CoffeeIcon,
  ImageContainer,
  SubmitButton,
  AddIconImage,
  InputLabel,
  AddOnitemIcon
} from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  CenterAlignedColumnContainer,
  IconItemGroupContainer,
  IconItemContainer,
  ItemPriceContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer,
  ItemDescriptionText
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

const AddOnItems = () => {
  const AddProductContext = useContext(addProductContext);

  const {
    addOnFlavourData,
    getData,
    handleAddOnFlavourChange,
    nextStep,
    previousStep,
    loading,
    Category
  } = AddProductContext;

  useEffect(() => {
    if (addOnFlavourData.length === 0) {
      getData('/api/v1/addOn/flavour', 'SET_ADDONFLAVOURDATA');
    }
  }, []);

  if (Category === 'Beverages') {
    return (
      <Fragment>
        <CenterAlignedColumnContainer>
          <FormHeadingText>
            <FormSectionHeadingTextContainer>
              Add - Ons
            </FormSectionHeadingTextContainer>
          </FormHeadingText>
          <IconItemGroupContainer>
            {addOnFlavourData.map((item, index) => {
              {
                return (
                  <>
                    <IconItemContainer>
                      <HiddenCheckbox
                        key={index}
                        name={item.itemName}
                        id={item.itemName}
                        value={item.itemName}
                        onChange={e => handleAddOnFlavourChange(e)}
                      />
                      <InputLabel for={item.itemName}>
                        <AddIconImage
                          checked={item.isChecked}
                          src={item.itemIconURL}
                        />
                        <AddOnitemIcon checked={item.isChecked} />
                        <ItemDescription>
                          <ItemDescriptionText>
                            {item.itemName}
                          </ItemDescriptionText>
                        </ItemDescription>
                        <ItemPriceContainer>
                          <ItemDescriptionText>
                            <span>Rs. </span>
                            {item.itemPrice}
                          </ItemDescriptionText>
                        </ItemPriceContainer>
                      </InputLabel>
                    </IconItemContainer>
                  </>
                );
              }
            })}
          </IconItemGroupContainer>
          <PartialWidthDivider />
        </CenterAlignedColumnContainer>
      </Fragment>
    );
  } else {
    return null;
  }
};

export default AddOnItems;
