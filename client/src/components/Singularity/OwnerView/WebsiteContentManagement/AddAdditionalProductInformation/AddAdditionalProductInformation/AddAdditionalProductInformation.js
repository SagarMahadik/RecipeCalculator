import React, { Fragment, useContext } from 'react';

import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import {
  PartialWidthDivider,
  FullWidthDivider
} from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import { CenterAlignedColumnContainer } from 'styles/Singularity/ApplicationStyles/ContainerStyles';

import {
  InputLabel,
  InputText,
  InputTextContainer,
  UploadImageBackground,
  InputSelect,
  InputOption,
  UploadFileInput
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';
import {
  ActionButton,
  ButtonText,
  ButtonContainer
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';
import DoneIcon from 'components/Singularity/ApplicationView/DoneIcon';
import attachmentIcon from 'img/piatto/icons/attachmenticon.png';

import addAdditionalProductInformationContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAdditionalProductInformation/AddAdditionalProductInformationState/addAdditionalProductInformationContext.js';

function AddAdditionalProductInformation() {
  const AddAdditionalProductInformationContext = useContext(
    addAdditionalProductInformationContext
  );

  const {
    loading,
    handleChangeFor,
    additionalInformationName,
    additionalInformation,
    selectedFileName,
    onFileSelect,
    fileInputRef,
    onSubmit,
    isComplete
  } = AddAdditionalProductInformationContext;
  if (isComplete) {
    return <DoneIcon />;
  }
  return (
    <Fragment>
      <LogoImage src={PiattoLogo} height="74px" width="115px" />
      <PageHeader>
        <PTSansText fontSize="24px" color="#DAA520">
          Add Product Additional Information
        </PTSansText>
      </PageHeader>
      <FullWidthDivider />
      <CenterAlignedColumnContainer>
        <InputLabel
          for="additionalInformationName"
          style={{ marginTop: '30px', width: '358px' }}
        >
          Additional Information type
        </InputLabel>
        <InputTextContainer>
          <InputSelect
            name="additionalInformationName"
            value={additionalInformationName}
            onChange={handleChangeFor('additionalInformationName')}
          >
            <InputOption value="" style={{ display: 'none' }}>
              Please select
            </InputOption>
            <InputOption>Product Status</InputOption>
            <InputOption>Product Variant</InputOption>
          </InputSelect>
        </InputTextContainer>
        <PartialWidthDivider />
        <InputLabel
          for="additionalInformation"
          style={{ marginTop: '30px', width: '358px' }}
        >
          Enter Additional Information
        </InputLabel>
        <InputText
          style={{ marginTop: '30px' }}
          name="additionalInformation"
          type="text"
          value={additionalInformation}
          onChange={handleChangeFor('additionalInformation')}
        />
        <PartialWidthDivider />
        <InputLabel
          for="InformnationIconImageFile"
          style={{ marginTop: '80px', width: '358px' }}
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
            name="itemIconFileName"
            onChange={onFileSelect('itemIconFileName')}
            ref={fileInputRef}
          />
        </UploadImageBackground>
        <ButtonContainer>
          <ActionButton width="153px" value="submit" onClick={onSubmit}>
            <ButtonText>Done</ButtonText>
          </ActionButton>
        </ButtonContainer>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
}

export default AddAdditionalProductInformation;
