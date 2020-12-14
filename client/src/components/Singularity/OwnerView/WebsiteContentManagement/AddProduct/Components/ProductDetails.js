import React, { useState, useContext, useEffect, useRef } from 'react';

import {
  TextBox,
  TextParagraph,
  LabelText,
  LabelText1,
  InputWrapper,
  CrossSellPitch,
  ProductPrice,
  ProductPriceLabel
} from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  CenterAlignedColumnContainer,
  ProductVariantContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer,
  FormContentText
} from 'styles/Singularity/Style1.0/TextStyles';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import { gsap, Bounce, Slow, TweenMax, Power3 } from 'gsap';

const ProductDetails = React.forwardRef((props, setRef1) => {
  const AddProductContext = useContext(addProductContext);

  const {
    Category,
    SubCategory,
    productName,
    productDescription,
    crossSellPitch,
    productPrice,
    categoryData,
    loading,
    step,
    nextStep,
    previousStep,
    handleChangeFor,
    isSubCategory,
    getCategoryData,
    selectedCategory,
    handleChange,
    isCategory
  } = AddProductContext;

  const [hide, setHide] = useState(true);
  let productDetails = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      productDetails,
      {
        autoAlpha: 0
      },
      {
        duration: 1.3,
        autoAlpha: 1,

        delay: 0.2,
        ease: Power3.easeOut
      }
    );
  }, []);

  return (
    <>
      <ProductVariantContainer
        ref={el => {
          productDetails = el;
        }}
        style={{ visibility: 'hidden', width: '100%' }}
      >
        <FormHeadingText>
          <FormSectionHeadingTextContainer>
            Product Details
          </FormSectionHeadingTextContainer>
        </FormHeadingText>
        <InputWrapper>
          <TextBox
            placeholder=" "
            value={productName}
            type="text"
            name="productName"
            onChange={handleChangeFor('productName')}
          />
          <LabelText>Product Name</LabelText>
        </InputWrapper>
        <InputWrapper>
          <TextParagraph
            placeholder=" "
            value={productDescription}
            type="text"
            name="productDescription"
            onChange={handleChangeFor('productDescription')}
          />
          <LabelText1>Product Description</LabelText1>
        </InputWrapper>
        <InputWrapper>
          <CrossSellPitch
            placeholder=" "
            type="text"
            value={crossSellPitch}
            name={crossSellPitch}
            onChange={handleChangeFor('crossSellPitch')}
          />
          <LabelText1>Cross sell pitch</LabelText1>
        </InputWrapper>
        <InputWrapper>
          <ProductPrice
            placeholder=" "
            type="number"
            value={productPrice}
            name={productPrice}
            onChange={handleChangeFor('productPrice')}
          />
          <ProductPriceLabel>Product Price</ProductPriceLabel>
        </InputWrapper>
        <PartialWidthDivider ref={setRef1} />
      </ProductVariantContainer>
    </>
  );
});

export default ProductDetails;
