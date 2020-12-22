import React, { useContext } from 'react';

import rawMaterialManagementContext from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import {
  RawMMainContainer,
  AnimationContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import RawMaterialDetails from './RawMaterialDetails';
import RawMaterialTypeQuantity from './RawMaterialTypeQuantity';
import PriceGSTDetails from './PriceGSTDetails';
import SubmitRawMaterial from './SubmitRawMaterial';
import SearchUpdateSupplier from './SearchUpdateSupplier';

import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';
import Loaders from 'components/Singularity/ApplicationView/Loaders';

const RawMaterialManagement = () => {
  const RawMaterialManagementContext = useContext(rawMaterialManagementContext);

  const {
    loading,
    showLoader,
    isDataUploaded,
    supplierDetails
  } = RawMaterialManagementContext;

  if (showLoader) {
    return <Ball loading={loading} isComplete={isDataUploaded} />;
  }

  return (
    <>
      <FormHeadings heading="Raw Material Details" />
      {supplierDetails.length === 0 ? (
        <RawMMainContainer>
          <Loaders />
        </RawMMainContainer>
      ) : (
        <>
          <AnimationContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.8
            }}
            exit={{ opacity: 0 }}
          >
            <SearchUpdateSupplier />
            <RawMaterialDetails />
            <RawMaterialTypeQuantity />
            <PriceGSTDetails />
            <SubmitRawMaterial />
          </AnimationContainer>
        </>
      )}
    </>
  );
};

export default RawMaterialManagement;
