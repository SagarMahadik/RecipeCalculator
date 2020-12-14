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

import Plate from 'components/Singularity/ApplicationView/FormElements/Plate';

const AddOnItems = () => {
  const AddProductContext = useContext(addProductContext);

  const {
    addOnitemData,
    getData,
    handleAddOnItemChange,
    nextStep,
    previousStep,
    loading
  } = AddProductContext;

  useEffect(() => {}, []);

  return (
    <Fragment>
      <CenterAlignedColumnContainer>
        <FormHeadingText>
          <FormSectionHeadingTextContainer>
            Add - Ons
          </FormSectionHeadingTextContainer>
        </FormHeadingText>
        <IconItemGroupContainer>
          {addOnitemData.map((item, index) => {
            {
              return (
                <>
                  <IconItemContainer>
                    <HiddenCheckbox
                      key={index}
                      name={item.itemName}
                      id={item.itemName}
                      value={item.itemName}
                      onChange={e => handleAddOnItemChange(e)}
                    />
                    <InputLabel for={item.itemName}>
                      <AddIconImage
                        style={{ border: '0px solid green' }}
                        checked={item.isChecked}
                        src={item.itemIconURL}
                      />
                      <Plate
                        style={{
                          width: '110px',
                          marginTop: '-60px',
                          zIndex: '-1'
                        }}
                        checked={item.isChecked}
                      />

                      <ItemDescription checked={item.isChecked}>
                        <ItemDescriptionText checked={item.isChecked}>
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
};

export default AddOnItems;
