import React, { Fragment, useContext, useEffect, useRef } from 'react';

import {
  TextBox,
  TextParagraph,
  UploadButton,
  UploadLabel,
  UploadIcon,
  UploadFileInput,
  AttachmentImage,
  ImageContainer
} from 'styles/Singularity/Style1.0/FormInputStyles';

import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';
import { gsap, Bounce, TweenMax, Power3 } from 'gsap';

import {
  FormHeadingText,
  FormSectionHeadingTextContainer,
  PTSansText
} from 'styles/Singularity/Style1.0/TextStyles';

import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';

import attachmentIcon from 'img/piatto/icons/attachmenticon.png';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';
import ScrollAnimation from 'react-animate-on-scroll';

const UploadImage = React.forwardRef(props => {
  const AddProductContext = useContext(addProductContext);

  const {
    productFileName,
    onFileSelect,
    fileInputRef,
    nextStep,
    previousStep
  } = AddProductContext;

  let uploadImageRef = useRef(null);
  useEffect(() => {
    TweenMax.fromTo(
      uploadImageRef,
      {
        autoAlpha: 1,
        x: -400
      },
      {
        duration: 1.4,
        autoAlpha: 1,
        x: 0,
        delay: 0.1,

        ease: Power3.easeOut
      }
    );
  }, []);

  return (
    <Fragment>
      <div
        ref={el => {
          uploadImageRef = el;
        }}
      >
        <CenterAlignedColumnContainer>
          <FormSectionHeadingTextContainer>
            <FormHeadingText>Upload Image</FormHeadingText>
          </FormSectionHeadingTextContainer>

          <UploadButton style={{ marginTop: '30px' }}>
            <UploadFileInput
              type="file"
              name="productFileName"
              onChange={onFileSelect('productFileName')}
              ref={fileInputRef}
            />
            <ImageContainer style={{ marginTop: '-20px', marginLeft: '30px' }}>
              <UploadIcon src={attachmentIcon} />
            </ImageContainer>
          </UploadButton>
          <PTSansText fontSize="18px" color="black">
            File Selected: {productFileName}
          </PTSansText>
        </CenterAlignedColumnContainer>
      </div>
      <PartialWidthDivider />
    </Fragment>
  );
});

export default UploadImage;
