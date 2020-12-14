import React, { useContext } from 'react';
import addProdductContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/State/addProductContext.js';
import StyledSubmitButton from 'components/Singularity/ApplicationView/FormElements/Inputs/StyledSubmitButton.js';

const SubmitProduct = () => {
  const AddProductContext = useContext(addProdductContext);
  const { initiateSubmit } = AddProductContext;
  return <StyledSubmitButton onClick={initiateSubmit} text="Add product" />;
};

export default SubmitProduct;
