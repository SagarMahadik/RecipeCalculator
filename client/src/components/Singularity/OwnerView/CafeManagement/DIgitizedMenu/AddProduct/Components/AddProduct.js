import React, { useContext } from 'react';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import Category from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/Components/Category.js';
import ProductDetails from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/Components/ProductDetails.js';
import ProductType from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/Components/ProductType.js';
import SubmitProduct from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/Components/SubmitProduct.js';
import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';
import Loaders from 'components/Singularity/ApplicationView/Loaders';
import { CenterAlignedColumnContainer } from 'styles/Singularity/Style1.0/ContainerStyles';

import addProductContext from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/AddProduct/State/addProductContext.js';

const AddProduct = () => {
  const AddProductContext = useContext(addProductContext);

  const { showLoader, loading, isComplete, categoryData } = AddProductContext;

  if (showLoader) {
    return <Ball loading={loading} isComplete={isComplete} />;
  }
  return (
    <>
      <FormHeadings heading="Add Product Details" />
      {categoryData.length === 0 ? (
        <CenterAlignedColumnContainer>
          <Loaders />
        </CenterAlignedColumnContainer>
      ) : (
        <>
          <Category />
          <ProductDetails />
          <ProductType />
          <SubmitProduct />
        </>
      )}
    </>
  );
};

export default AddProduct;
