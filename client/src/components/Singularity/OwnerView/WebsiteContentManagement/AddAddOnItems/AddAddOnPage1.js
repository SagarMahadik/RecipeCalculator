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
  InputParagraph,
  InputSelect,
  InputOption
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';

import {
  ActionButton,
  ButtonText
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';

import addAddOnItemContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnItemsState/addAddOnItemContext';

const AddAddOnPage1 = ({}) => {
  const AddAddOnItemContext = useContext(addAddOnItemContext);

  const {
    loading,
    handleChangeFor,
    nextStep,
    previousStep,
    addOnCategory,
    itemName,
    itemPrice
  } = AddAddOnItemContext;

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
          for="addOnCategory"
          style={{ marginTop: '30px', width: '358px' }}
        >
          Category
        </InputLabel>
        <InputTextContainer>
          <InputSelect
            value={addOnCategory}
            name="addOnCategory"
            onChange={handleChangeFor('addOnCategory')}
          >
            <InputOption value="" style={{ display: 'none' }}>
              Please select
            </InputOption>
            <InputOption>Add On</InputOption>
            <InputOption>Flavours</InputOption>
          </InputSelect>
        </InputTextContainer>
        <PartialWidthDivider />
        <InputLabel
          for="itemName"
          style={{ marginTop: '30px', width: '358px' }}
        >
          Enter Add-on Item Name
        </InputLabel>
        <InputText
          style={{ marginTop: '30px' }}
          name="itemName"
          type="text"
          value={itemName}
          onChange={handleChangeFor('itemName')}
        />
        <PartialWidthDivider />

        <InputLabel
          for="itemPrice"
          style={{ marginTop: '30px', width: '358px' }}
        >
          Enter Price
        </InputLabel>
        <InputText
          name="itemPrice"
          type="text"
          style={{ marginTop: '30px' }}
          value={itemPrice}
          onChange={handleChangeFor('itemPrice')}
        />
        <PartialWidthDivider />
        <ActionButton width="156px" value="submit" onClick={nextStep}>
          <ButtonText>Next</ButtonText>
        </ActionButton>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default AddAddOnPage1;
