import React from 'react';

import { useRawMaterialsState } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';
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

import Ball from 'components/Singularity/ApplicationView/Loaders/Ball';
import Loaders from 'components/Singularity/ApplicationView/Loaders';
import SupplierRequest from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/APIrequests/SupplierRequest.js';
import RawMaterialRequest from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/APIrequests/RawMaterialRequest.js';

import { MainContentContainer } from 'styles/Singularity/Style1.0/ContainerStyles/index.js';
import useSupplier from 'Hooks/APICalls/useSupplier.js';

const RawMaterialManagement = () => {
  const { loading, showLoader, isDataUploaded } = useRawMaterialsState();

  const { status, data: supplierData, isError, error } = useSupplier();

  if (showLoader) {
    return <Ball loading={loading} isComplete={isDataUploaded} />;
  }

  if (isError) {
    console.log(error);
  }

  return (
    <>
      <FormHeadings heading="Raw Material Details" />
      {status === 'loading' ? (
        <RawMMainContainer>
          <Loaders />
        </RawMMainContainer>
      ) : supplierData && supplierData.length > 0 ? (
        <>
          <MainContentContainer>
            <SearchUpdateSupplier supplierDetails={supplierData} />
            <RawMaterialDetails />
            <RawMaterialTypeQuantity />
            <PriceGSTDetails />
            <RawMaterialValidations />
            <CalculatePricePostGST />
            <SupplierRequest />
            <RawMaterialRequest />
            <SubmitRawMaterial />
          </MainContentContainer>
        </>
      ) : null}
    </>
  );
};

export default RawMaterialManagement;
