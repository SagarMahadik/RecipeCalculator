import React from 'react';
import AddProduct from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/Components/AddProduct.js';
import AddProductState from 'components/Singularity/OwnerView/WebsiteContentManagement/AddProduct/State/AddProductState.js';

const AddProductMainComponent = () => {
  return (
    <AddProductState>
    <AddProduct />
  </AddProductState>
  );
};

export default AddProductMainComponent;