import React, { Fragment, useEffect, useContext } from 'react';
import { LogoImage } from 'styles/Singularity/ApplicationStyles/LogoStyles/';
import PiattoLogo from 'img/piatto/piattoLogo.png';
import { PageHeader } from 'styles/Singularity/ApplicationStyles/PageHeader';
import { FullWidthDivider } from 'styles/Singularity/ApplicationStyles/PageDividerStyles';
import {
  InputLabel,
  IconCheckBoxRound,
  CheckBoxIcon,
  CheckBoxIconName,
  IconCheckBoxRoundButton,
  HiddenCheckbox
} from 'styles/Singularity/ApplicationStyles/FormStyles/InputStyles';
import {
  ActionButton,
  ButtonText,
  PrevoiusButton,
  ButtonContainer
} from 'styles/Singularity/ApplicationStyles/ButtonStyles';

import { PTSansText } from 'styles/Singularity/ApplicationStyles/TextStyles';

import {
  CenterAlignedColumnContainer,
  FlexRowContainer,
  FormSectionNameContainer
} from 'styles/Singularity/ApplicationStyles/ContainerStyles';

import Sleepy from 'components/Singularity/ApplicationView/WaitingIcons/Sleepy';
import addProductContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/addProductContext.js';

const AddProductFourthPage = () => {
  const AddProductContext = useContext(addProductContext);

  const {
    addOnitemData,
    getAddOnItemData,
    handleAddOnItemChange,
    nextStep,
    previousStep,
    loading
  } = AddProductContext;

  useEffect(() => {
    if (addOnitemData.length === 0) {
      getAddOnItemData();
    }
  }, []);

  return (
    <Fragment>
      <CenterAlignedColumnContainer>
        <FormSectionNameContainer style={{ marginTop: '5px' }}>
          <PTSansText fontSize="16px" color="#DAA520">
            Add on
          </PTSansText>
        </FormSectionNameContainer>
        <FlexRowContainer width="310px" marginTop="-30px">
          {addOnitemData.map((item, index) => {
            {
              return (
                <IconCheckBoxRoundButton>
                  <HiddenCheckbox
                    key={index}
                    name={item.itemName}
                    id={item.itemName}
                    value={item.itemName}
                    onChange={e => handleAddOnItemChange(e)}
                  />
                  <InputLabel
                    for={item.itemName}
                    style={{ marginTop: '15px' }}
                    lineHeight="18px"
                  >
                    <IconCheckBoxRound checked={item.isChecked}>
                      <CheckBoxIcon
                        checked={item.isChecked}
                        src={item.itemIconURL}
                      />
                    </IconCheckBoxRound>
                    <CheckBoxIconName>
                      <PTSansText fontSize="18px" lineHeight="18px">
                        {item.itemName}
                      </PTSansText>
                    </CheckBoxIconName>
                    <CheckBoxIconName>
                      <PTSansText fontSize="16px">
                        <span>Rs. </span>
                        {item.itemPrice}
                      </PTSansText>
                    </CheckBoxIconName>
                  </InputLabel>
                </IconCheckBoxRoundButton>
              );
            }
          })}
        </FlexRowContainer>
      </CenterAlignedColumnContainer>
    </Fragment>
  );
};

export default AddProductFourthPage;
