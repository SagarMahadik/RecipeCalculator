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
  InputLabel,
  ImageContainer,
  RadioButtonIcon,
  HiddenRadioButton
} from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  CenterAlignedColumnContainer,
  IconItemGroupContainer,
  IconItemContainer,
  ProductTypeContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer,
  ItemDescriptionText
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import vegIcon from 'img/piatto/icons/vegicon.svg';
import nonVegIcon from 'img/piatto/icons/nonvegicon.svg';
import eggIcon from 'img/piatto/icons/candy.svg';

import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';
import ScrollAnimation from 'react-animate-on-scroll';
import { gsap, Bounce, TweenMax, Power2, Power3 } from 'gsap';
const ProductType = () => {
  const AddProductContext = useContext(addProductContext);

  const { handleChangeFor, cuisine } = AddProductContext;

  let productTypeRef = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      productTypeRef,
      {
        autoAlpha: 0,
        x: 200
      },
      {
        duration: 1.22,
        autoAlpha: 1,
        x: 0,
        y: 0,
        ease: Power3.easeOut
      }
    );
  }, []);

  let vegRef = useRef(null);
  let nonVegRef = useRef(null);
  let egggRef = useRef(null);

  const bounceElement = element => {
    TweenMax.to(element, 0.5, {
      y: -100,
      ease: Power2.easeOut
    });
    TweenMax.to(element, 0.8, {
      y: 0,
      ease: Bounce.easeOut,
      delay: 0.0
    });
  };

  return (
    <Fragment>
      <div
        ref={el => {
          productTypeRef = el;
        }}
        style={{ width: '100%' }}
      >
        <FormSectionHeadingTextContainer>
          <FormHeadingText>Product Type</FormHeadingText>
        </FormSectionHeadingTextContainer>

        <ProductTypeContainer>
          <IconItemGroupContainer>
            <HiddenRadioButton
              name="cuisine"
              value="veg"
              id="veg"
              onChange={handleChangeFor('cuisine')}
            />
            <InputLabel for="veg">
              <IconItemContainer
                onClick={() => {
                  bounceElement(vegRef);
                }}
              >
                <IconBorderCircle
                  ref={el => {
                    vegRef = el;
                  }}
                  checked={cuisine === 'veg'}
                >
                  <ImageContainer>
                    {' '}
                    <RadioButtonIcon src={vegIcon} />
                  </ImageContainer>
                </IconBorderCircle>
                <ItemDescription>
                  <ItemDescriptionText>Vegetarian</ItemDescriptionText>
                </ItemDescription>
              </IconItemContainer>
            </InputLabel>
            <HiddenRadioButton
              name="cuisine"
              value="Non veg"
              id="nonVeg"
              onChange={handleChangeFor('cuisine')}
            />
            <InputLabel for="nonVeg">
              <IconItemContainer
                onClick={() => {
                  bounceElement(nonVegRef);
                }}
              >
                <IconBorderCircle
                  ref={el => {
                    nonVegRef = el;
                  }}
                  checked={cuisine === 'Non veg'}
                >
                  <ImageContainer>
                    {' '}
                    <RadioButtonIcon src={nonVegIcon} />
                  </ImageContainer>
                </IconBorderCircle>
                <ItemDescription>
                  <ItemDescriptionText>Non Vegetarian</ItemDescriptionText>
                </ItemDescription>
              </IconItemContainer>
            </InputLabel>
            <HiddenRadioButton
              name="cuisine"
              value="Egg"
              id="egg"
              onChange={handleChangeFor('cuisine')}
            />
            <InputLabel for="egg">
              <IconItemContainer
                onClick={() => {
                  bounceElement(egggRef);
                }}
              >
                <IconBorderCircle
                  ref={el => {
                    egggRef = el;
                  }}
                  checked={cuisine === 'Egg'}
                >
                  <ImageContainer>
                    <RadioButtonIcon src={eggIcon} />
                  </ImageContainer>
                </IconBorderCircle>
                <ItemDescription>
                  <ItemDescriptionText>Eggeterian</ItemDescriptionText>
                </ItemDescription>
              </IconItemContainer>
            </InputLabel>
          </IconItemGroupContainer>
          <PartialWidthDivider />
        </ProductTypeContainer>
      </div>
    </Fragment>
  );
};

export default ProductType;
