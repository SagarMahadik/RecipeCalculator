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
import { gsap, Bounce, TweenMax, Power3 } from 'gsap';

import {
  CenterAlignedColumnContainer,
  IconItemGroupContainer,
  IconItemContainer,
  ProductStatusContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer,
  ItemDescriptionText
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import ScrollAnimation from 'react-animate-on-scroll';
import animation from 'styles/Singularity/GSAPAnimations';

const ProductStatus = () => {
  const productStatusRefs = useRef([]);
  productStatusRefs.current = [];
  const AddProductContext = useContext(addProductContext);

  const {
    productStatusData,
    getData,
    handleProductStatusChange,
    nextStep,
    handleChangeFor,
    cuisine,
    previousStep,
    loading
  } = AddProductContext;

  let productStatusRef = useRef(null);
  useEffect(() => {
    animation.fadeIn(productStatusRef);
  }, []);

  const addToRefs = el => {
    if (el && !productStatusRefs.current.includes(el)) {
      productStatusRefs.current.push(el);
    }
  };
  return (
    <Fragment>
      <div
        ref={el => {
          productStatusRef = el;
        }}
        style={{ width: '100%' }}
      >
        <ProductStatusContainer>
          <FormSectionHeadingTextContainer>
            <FormHeadingText>Product Status</FormHeadingText>
          </FormSectionHeadingTextContainer>

          <IconItemGroupContainer>
            {productStatusData.map((product, i) => {
              {
                return (
                  <IconItemContainer>
                    <HiddenCheckbox
                      key={i}
                      id={product._id}
                      name={product._id}
                      value={product.additionalInformation}
                      onChange={e => handleProductStatusChange(e)}
                    />

                    <InputLabel
                      for={product._id}
                      onClick={() => {
                        animation.IconBounce(productStatusRefs.current, i);
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
          <PartialWidthDivider />
        </ProductStatusContainer>
      </div>
    </Fragment>
  );
};

export default ProductStatus;
