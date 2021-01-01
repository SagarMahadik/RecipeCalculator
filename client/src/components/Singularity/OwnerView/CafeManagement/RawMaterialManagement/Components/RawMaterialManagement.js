import React, { useContext, useEffect } from 'react';

import { rawMaterialManagementContext } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';
import FormHeadings from 'components/Singularity/ApplicationView/FormHeadings';
import {
  RawMMainContainer,
  AnimationContainer
} from 'styles/Singularity/OwnerView/CafeManagement/RawMaterialManagement';
import RawMaterialDetails from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/DisplayComponents/RawMaterialDetails.js';
import RawMaterialTypeQuantity from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/DisplayComponents/RawMaterialTypeQuantity.js';
import PriceGSTDetails from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/DisplayComponents/PriceGSTDetails.js';
import SubmitRawMaterial from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/DisplayComponents/SubmitRawMaterial.js';
import SearchUpdateSupplier from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/DisplayComponents/SearchUpdateSupplier.js';
import RawMaterialValidations from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/Validations/RawMaterialValidations.js';
import CalculatePricePostGST from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/Utilities/CalculatePricePostGST.js';

import { applicationContext } from 'Context/ApplicationContext/applicationContext.js';

import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';
import Loaders from 'components/Singularity/ApplicationView/Loaders';
import SupplierRequest from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/APIrequests/SupplierRequest.js';
import RawMaterialRequest from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/APIrequests/RawMaterialRequest.js';

const RawMaterialManagement = () => {
  const RawMaterialManagementContext = useContext(rawMaterialManagementContext);

  const { loading, showLoader, isDataUploaded } = RawMaterialManagementContext;

  const ApplicationContext = useContext(applicationContext);

  const { supplierDetails, supplierDetailsLoaded } = ApplicationContext;

  if (showLoader) {
    return <Ball loading={loading} isComplete={isDataUploaded} />;
  }

  return (
    <>
      <FormHeadings heading="Raw Material Details" />
      {supplierDetails.length === 0 && !supplierDetailsLoaded ? (
        <RawMMainContainer>
          <Loaders />
        </RawMMainContainer>
      ) : supplierDetails && supplierDetailsLoaded ? (
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
            <RawMaterialValidations />
            <CalculatePricePostGST />
            <SupplierRequest />
            <RawMaterialRequest />
            <SubmitRawMaterial />
          </AnimationContainer>
        </>
      ) : null}
    </>
  );
};

export default RawMaterialManagement;
