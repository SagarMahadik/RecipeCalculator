import React, { Fragment, useContext, useEffect } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import { FullWidthDivider } from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import { CenterAlignedColumnContainer } from 'styles/Singularity/ApplicationStyles/ContainerStyles';

import {
  InputLabel,
  UploadImageBackground,
  UploadFileInput
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';

import {
  ActionButton,
  ButtonText,
  ButtonContainer,
  PrevoiusButton
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';
import DoneIcon from 'components/Singularity/ApplicationView/DoneIcon';
import attachmentIcon from 'img/piatto/icons/attachmenticon.png';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

function AddProductPage2() {
  const AddProductContext = useContext(addProductContext);

  const {
    productFileName,
    onFileSelect,
    fileInputRef,
    nextStep,
    previousStep
  } = AddProductContext;

  useEffect(() => {}, []);

  return (
    <Fragment>
      <CenterAlignedColumnContainer>
        <InputLabel
          for="productFileName"
          style={{ marginTop: '80px', widthh: '358px' }}
        >
          Upload Image
        </InputLabel>
        <UploadImageBackground style={{ marginTop: '30px' }}>
          <img
            src={attachmentIcon}
            style={{ height: '80px', marginLeft: '35px', marginTop: '30px' }}
          />
          <UploadFileInput
            type="file"
            name="productFileName"
            onChange={onFileSelect('productFileName')}
            ref={fileInputRef}
          />
        </UploadImageBackground>
        <PTSansText fontSize="18px" color="black">
          File Selected: {productFileName}
        </PTSansText>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
}

export default AddProductPage2;
