import React, {
  Fragment,
  useState,
  useEffect,
  useContext,
  useRef
} from 'react';
import {
  TextBox,
  TextParagraph,
  UplaodButton,
  ItemDescription,
  IconBorderCircle,
  RadioButtonIcon,
  InputLabel,
  HiddenCheckbox
} from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  CenterAlignedColumnContainer,
  IconItemGroupContainer,
  IconItemContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer,
  ItemDescriptionText
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import animation from 'styles/Singularity/GSAPAnimations';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

const ProductVariant = () => {
  const productVariantRefs = useRef([]);
  productVariantRefs.current = [];

  const addToRefs = el => {
    if (el && !productVariantRefs.current.includes(el)) {
      productVariantRefs.current.push(el);
    }
  };
  const AddProductContext = useContext(addProductContext);

  const {
    productVariantData,
    getData,
    handleProductVariantChange,
    nextStep,
    handleChangeFor,
    cuisine,
    previousStep,
    loading
  } = AddProductContext;

  useEffect(() => {
    if (productVariantData.length === 0) {
      getData(
        '/api/v1/additionalProductInfomation/variant',
        'SET_PRODUCTVARIANTDATA'
      );
    }
  }, []);

  return (
    <Fragment>
      <CenterAlignedColumnContainer>
        <FormHeadingText>
          <FormSectionHeadingTextContainer>
            Product Variant
          </FormSectionHeadingTextContainer>
        </FormHeadingText>
        <IconItemGroupContainer>
          {productVariantData.map((product, i) => {
            {
              return (
                <IconItemContainer>
                  <HiddenCheckbox
                    key={i}
                    id={product._id}
                    name={product._id}
                    value={product.additionalInformation}
                    onChange={e => handleProductVariantChange(e)}
                  />

                  <InputLabel
                    for={product._id}
                    onClick={() => {
                      animation.IconBounce(productVariantRefs.current, i);
                    }}
                  >
                    <IconBorderCircle
                      checked={product.isChecked}
                      ref={addToRefs}
                    >
                      <RadioButtonIcon
                        src={product.additionalInformationIconURL}
                      />
                    </IconBorderCircle>
                    <ItemDescription>
                      <ItemDescriptionText>
                        {product.additionalInformation}
                      </ItemDescriptionText>
                    </ItemDescription>
                  </InputLabel>
                </IconItemContainer>
              );
            }
          })}
        </IconItemGroupContainer>
        <PartialWidthDivider style={{ marginTop: '100px' }} />
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default ProductVariant;
