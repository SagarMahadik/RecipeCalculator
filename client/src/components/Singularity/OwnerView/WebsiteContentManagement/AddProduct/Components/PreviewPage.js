import React, {
  Fragment,
  useEffect,
  useContext,
  useState,
  useRef,
  useMemo
} from 'react';
import {
  TextBox,
  TextParagraph,
  TextRadioButton,
  HiddenRadioButton,
  AddIconImage,
  InputLabel,
  AddOnitemIcon,
  ItemDescription,
  IconBorderCircle,
  RadioButtonIcon
} from 'styles/Singularity/Style1.0/FormInputStyles';

import {
  CenterAlignedColumnContainer,
  CenterAlignedRowContainer,
  CategoryContainer,
  LeftrAlignedColumnContainer,
  LeftAlignedRowContainer,
  MenuPageMainContainer,
  MenuContentContainer,
  MenuPagePriceContainer,
  MenuPageIconContainer,
  IconItemGroupContainer,
  IconItemContainer,
  ItemPriceContainer,
  MenuAlignmentContainer,
  MenuPageDescriptionContainer,
  PreviewPageProductNameContainer,
  PreviewProductPriceContainer,
  NameCuisineIconContainer
} from 'styles/Singularity/Style1.0/ContainerStyles';

import {
  OverLay,
  ImageContainer,
  ProductImage,
  IconImage,
  ProductPageICon
} from 'styles/Singularity/Style1.0/ImageStyles';

import { SubmitButton } from 'styles/Singularity/Style1.0/ButtonStyles';
import Plate from 'components/Singularity/ApplicationView/FormElements/Plate';
import { gsap, TweenMax } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import {
  RadioButtonText,
  TextContainer,
  ProductName,
  ProductInformation,
  ProductIconDescription,
  PriceText,
  FormHeadingText,
  PreviewaPageSectionHeader,
  ItemDescriptionText,
  ButtonText,
  ProductImageName,
  PriceTextContainer,
  ProductInformationTextContainer
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

import VegIcon from 'components/Singularity/ApplicationView/VegIcon.js';
import NonVegIcon from 'components/Singularity/ApplicationView/NonVegIcon.js';
import DoneIcon from 'components/Singularity/ApplicationView/DoneIcon';

gsap.registerPlugin(ScrollToPlugin);

const PreviewPage = () => {
  const AddProductContext = useContext(addProductContext);

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
    isComplete,
    crossSellPitch,
    nutritionDetails,
    proteins,
    fats,
    carbohydrates,
    calories,
    loading
  } = AddProductContext;

  let isVeg = false;
  if (cuisine === 'veg') {
    isVeg = true;
  }

  useEffect(() => {
    setNutrientData();
    const productStatus = additionalInformation.filter(
      status => status.additionalInformationType == 'status'
    );
    const productVariant = additionalInformation.filter(
      variant => variant.additionalInformationType == 'variant'
    );

    console.log(productStatus);
    console.log(productVariant);
  }, [additionalInformation, proteins, fats, carbohydrates, calories]);

  const [showLoader, setShowLoader] = useState(false);

  let productImageRef = useRef(null);
  let CuisineIconRef = useRef(null);
  let productNameRef = useRef(null);
  let productPriceRef = useRef(null);
  let productInformationRef = useRef(null);
  let productStatus = useRef(null);
  let addOnRef = useRef(null);
  let makeItRef = useRef(null);
  let cardRef = useRef([]);

  const [play, setPlay] = useState(false);
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    console.log(play);

    timeline
      .to(window, {
        duration: 0.6,
        scrollTo: { y: '#productImage', offsetY: 50 }
      })
      .to(cardRef.current, {
        opacity: 0.2,
        ease: 'power4.inOut',
        duration: 0.8
      })
      .to(cardRef.current[0], {
        opacity: 1,
        duration: 1.2,
        ease: 'power4.inOut'
      })
      .to(cardRef.current[0], {
        opacity: 0.2,
        duration: 0.8,
        ease: 'power4.inOut'
      })

      .to(cardRef.current[1], {
        opacity: 1,
        duration: 1.2,
        ease: 'power4.inOut'
      })
      .to(cardRef.current[1], {
        opacity: 0.2,
        duration: 0.8,
        ease: 'power4.inOut'
      })

      .to(cardRef.current[2], {
        opacity: 1,
        duration: 1.2,
        ease: 'power4.inOut'
      })
      .to(cardRef.current[2], {
        opacity: 0.2,
        duration: 0.8,
        ease: 'power4.inOut'
      })

      .to(cardRef.current[3], {
        opacity: 1,
        duration: 1.2,
        ease: 'power4.inOut'
      })
      .to(cardRef.current[3], {
        opacity: 0.2,
        duration: 0.8,
        ease: 'power4.inOut'
      })

      .to(cardRef.current[4], {
        opacity: 1,
        duration: 1.5,
        ease: 'power4.inOut'
      })
      .to(cardRef.current[4], {
        opacity: 0.2,
        duration: 0.8,
        ease: 'power4.inOut'
      })

      .to(cardRef.current[5], {
        opacity: 1,
        duration: 1.6,
        ease: 'power4.inOut'
      })
      .to(cardRef.current[5], {
        opacity: 0.2,
        duration: 0.8,
        ease: 'power4.inOut'
      })

      .to(cardRef.current[6], {
        opacity: 1,
        duration: 1.7,
        ease: 'power4.inOut'
      })
      .to(cardRef.current[6], {
        opacity: 0.2,
        duration: 0.8,
        ease: 'power4.inOut'
      })
      .to(window, {
        duration: 0.6,
        scrollTo: { y: '#productStatus', offsetY: 50 }
      })
      .to(cardRef.current[7], { opacity: 1, duration: 1.8 })
      .to(cardRef.current[7], { opacity: 0.2, duration: 0.8 })
      .to(cardRef.current, {
        opacity: 1,
        ease: 'power4.inOut'
      });
  }, []);

  useEffect(() => {
    if (play) {
      timeline.play();
    }
  }, [play]);

  return (
    <Fragment>
      <CenterAlignedColumnContainer style={{ marginTop: '15px' }}>
        <PreviewaPageSectionHeader>
          <FormHeadingText>Preview</FormHeadingText>
        </PreviewaPageSectionHeader>

        <ImageContainer id="productImage">
          <img
            style={{
              height: '200px',
              width: '300px',
              borderRadius: '25px'
            }}
            src={filesrc}
            ref={el => {
              cardRef.current[0] = el;
            }}
          />
        </ImageContainer>
        <MenuAlignmentContainer>
          <PreviewPageProductNameContainer>
            <NameCuisineIconContainer>
              <IconImage
                ref={el => {
                  cardRef.current[1] = el;
                }}
                src="https://res.cloudinary.com/antilibrary/image/upload/v1595774240/nonvegicon_lioksr.png"
              />

              <ProductImageName
                ref={el => {
                  cardRef.current[2] = el;
                }}
              >
                {productName}
              </ProductImageName>
            </NameCuisineIconContainer>
          </PreviewPageProductNameContainer>

          <PreviewProductPriceContainer>
            <PriceTextContainer>
              <PriceText
                ref={el => {
                  cardRef.current[3] = el;
                }}
              >
                Rs. {productPrice}
              </PriceText>
            </PriceTextContainer>
          </PreviewProductPriceContainer>
        </MenuAlignmentContainer>

        <ProductInformationTextContainer style={{ marginTop: '0.5em' }}>
          <ProductInformation
            ref={el => {
              cardRef.current[4] = el;
            }}
          >
            {productDescription}
            <span> {crossSellPitch}</span>
          </ProductInformation>
        </ProductInformationTextContainer>
        <div
          ref={el => {
            cardRef.current[5] = el;
          }}
          style={{ width: '100%', marginTop: '0.5em' }}
        >
          <PreviewaPageSectionHeader>
            <FormHeadingText>Product Status</FormHeadingText>
          </PreviewaPageSectionHeader>

          <MenuPageIconContainer style={{ marginTop: '0.5em' }}>
            {additionalInformation
              .filter(status => status.additionalInformationType == 'status')
              .map((item, index) => {
                return (
                  <CenterAlignedColumnContainer style={{ marginRight: '4px' }}>
                    <ProductPageICon src={item.additionalInformationIconURL} />
                    <ProductIconDescription>
                      {item.additionalInformation}
                    </ProductIconDescription>
                  </CenterAlignedColumnContainer>
                );
              })}
          </MenuPageIconContainer>
        </div>
        <div
          ref={el => {
            cardRef.current[6] = el;
          }}
          style={{ width: '100%' }}
        >
          <PreviewaPageSectionHeader style={{ marginTop: '0.5em' }}>
            <FormHeadingText>Add - Ons</FormHeadingText>
          </PreviewaPageSectionHeader>
          <IconItemGroupContainer style={{ marginTop: '0.5em' }}>
            {selectedAddOnItemItems.map((item, index) => {
              {
                return (
                  <>
                    <IconItemContainer>
                      <InputLabel>
                        <AddIconImage src={item.itemIconURL} />
                        <Plate
                          style={{
                            width: '110px',
                            marginTop: '-60px',
                            zIndex: '-1'
                          }}
                        />

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
        </div>
        <div
          ref={el => {
            cardRef.current[7] = el;
          }}
          style={{ width: '100%' }}
          id="productStatus"
        >
          <FormHeadingText style={{ marginTop: '0.5em' }}>
            <PreviewaPageSectionHeader>Make it</PreviewaPageSectionHeader>
          </FormHeadingText>

          <IconItemGroupContainer style={{ marginTop: '0.5em' }}>
            {additionalInformation
              .filter(variant => variant.additionalInformationType == 'variant')
              .map((product, i) => {
                {
                  return (
                    <IconItemContainer>
                      <InputLabel>
                        <IconBorderCircle>
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
        </div>

        <SubmitButton
          style={{ marginTop: '0.5em' }}
          onClick={() => setPlay(true)}
        >
          <ButtonText>Submit</ButtonText>
        </SubmitButton>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default PreviewPage;
