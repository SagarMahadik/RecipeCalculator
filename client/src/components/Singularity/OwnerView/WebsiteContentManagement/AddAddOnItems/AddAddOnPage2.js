import React, { Fragment, useContext } from 'react';
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
  ButtonContainer
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';
import DoneIcon from 'components/Singularity/ApplicationView/DoneIcon';
import attachmentIcon from 'img/piatto/icons/attachmenticon.png';
import correctIcon from 'img/piatto/icons/correct.svg';
import addAddOnItemContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnItemsState/addAddOnItemContext';

function AddAddOnPage2() {
  const AddAddOnItemContext = useContext(addAddOnItemContext);

  const {
    loading,
    handleChangeFor,
    nextStep,
    previousStep,
    addOnCategory,
    itemName,
    itemPrice,
    onFileSelect,
    fileInputRef,
    onSubmit,
    isComplete,
    productFileName
  } = AddAddOnItemContext;

  if (isComplete) {
    return <DoneIcon />;
  }
  return (
    <Fragment>
      <LogoImage src={PiattoLogo} height="74px" width="115px" />
      <PageHeader>
        <PTSansText fontSize="24px" color="#DAA520">
          Add Add on Item
        </PTSansText>
      </PageHeader>
      <FullWidthDivider />
      <CenterAlignedColumnContainer>
        <InputLabel
          for="iconImageFile"
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

export default AddAddOnPage2;
