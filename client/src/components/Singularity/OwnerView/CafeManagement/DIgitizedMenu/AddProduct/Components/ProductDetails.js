import React, { useContext } from 'react';
import { PartialWidthDivider } from 'styles/Singularity/Style1.0/PageDividerStyles';
import {
  DMenuFormContainer,
  CategoryContainer,
  SubCategoryContainer
} from 'styles/Singularity/OwnerView/CafeManagement/DigitizedMenu';
import FormSectionHeading from 'components/Singularity/ApplicationView/FormHeadings/FormSectionHading.js';
import StyledTextBoxLabel from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledTextBoxLabel.js';
import addProductContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/State/addProductContext.js';

const ProductDetails = () => {
  const AddProductContext = useContext(addProductContext);
  const { productName, productPrice, handleChangeFor } = AddProductContext;
  return (
    <>
      <DMenuFormContainer>
        <StyledTextBoxLabel
          name={productName}
          value={productName}
          text="Product Name"
          onChange={handleChangeFor('productName')}
        />
        <StyledTextBoxLabel
          name={productPrice}
          value={productPrice}
          text="Product Price"
          onChange={handleChangeFor('productPrice')}
        />
        <PartialWidthDivider />
      </DMenuFormContainer>
    </>
  );
};

export default ProductDetails;
