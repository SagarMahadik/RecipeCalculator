import React from 'react';

import { ApplicationState } from 'Context/ApplicationContext/ApplicationState.js';

import {
  rawMaterialManagementContext,
  rawMaterialDispatchContext
} from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/rawMaterialManagementContext.js';

import { RawMaterialManagementState } from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/State/RawMaterialManagementState.js';
import RawMaterialValidations from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/Validations/RawMaterialValidations.js';
import RawMaterialRequest from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/APIrequests/RawMaterialRequest.js';
import CalculatePricePostGST from 'components/Singularity/OwnerView/CafeManagement/RawMaterialManagement/Components/Utilities/CalculatePricePostGST.js';

const SupplierRequestPostValidations = () => {
  return (
    <ApplicationState>
      <RawMaterialManagementState>
        <rawMaterialManagementContext.Consumer>
          {value => (
            <>
              <label htmlFor="rawMaterialName">RawMaterial Name:</label>
              <input
                id="rawMaterialName"
                data-testid="rawMaterialName"
                type="text"
                name="rawMaterialName"
                value={value.rawMaterialName}
                onChange={value.handleChangeFor('rawMaterialName')}
              />
              <label htmlFor="rawMaterialType">Raw Material type:</label>
              <input
                id="rawMaterialType"
                data-testid="rawMaterialType"
                type="text"
                name="rawMaterialType"
                value={value.rawMaterialType}
                onChange={value.handleChangeFor('rawMaterialType')}
              />
              <label htmlFor="rawMaterialBaseQuanitiy">
                rawMaterialBaseQuanitiy:
              </label>
              <input
                id="rawMaterialBaseQuanitiy"
                data-testid="rawMaterialBaseQuanitiy"
                type="text"
                name="rawMaterialBaseQuanitiy"
                value={value.rawMaterialBaseQuanitiy}
                onChange={value.handleChangeFor('rawMaterialBaseQuanitiy')}
              />
              <label htmlFor="rawMaterialGST">rawMaterialGST:</label>
              <input
                id="rawMaterialGST"
                data-testid="rawMaterialGST"
                type="text"
                name="rawMaterialGST"
                value={value.rawMaterialGST}
                onChange={value.handleChangeFor('rawMaterialGST')}
              />

              <label htmlFor="rawMaterialGSTPercent">
                rawMaterialGSTPercent:
              </label>
              <input
                id="rawMaterialGSTPercent"
                data-testid="rawMaterialGSTPercent"
                type="text"
                name="rawMaterialGSTPercent"
                value={value.rawMaterialGSTPercent}
                onChange={value.handleChangeFor('rawMaterialGSTPercent')}
              />

              <label htmlFor="rawMaterialStatePrice">
                rawMaterialStatePrice:
              </label>
              <input
                id="rawMaterialStatePrice"
                data-testid="rawMaterialStatePrice"
                type="text"
                name="rawMaterialStatePrice"
                value={value.rawMaterialStatePrice}
                onChange={value.handleChangeFor('rawMaterialStatePrice')}
              />

              <label htmlFor="rawMaterialStatePriceGST">
                rawMaterialStatePriceGST:
              </label>
              <input
                id="rawMaterialStatePriceGST"
                data-testid="rawMaterialStatePriceGST"
                type="text"
                name="rawMaterialStatePriceGST"
                value={value.rawMaterialStatePriceGST}
                onChange={value.handleChangeFor('rawMaterialStatePriceGST')}
              />

              <label htmlFor="supplierID">supplierID:</label>
              <input
                id="supplierID"
                data-testid="supplierID"
                type="text"
                name="supplierID"
                value={value.supplierID}
                onChange={value.handleChangeFor('supplierID')}
              />

              <span>
                Is validation initiated:{' '}
                {value.initiateRawMaterialValidations.toString()}
              </span>
              <span>
                Is validation completed: {value.validationsCompleted.toString()}
              </span>
              <span>
                Is Supplier request sent:{' '}
                {value.initiateSupplierPOSTrequest.toString()}
              </span>

              <button onClick={value.onSubmit}>Submit</button>

              <RawMaterialValidations />
              <CalculatePricePostGST />

              <RawMaterialRequest />
            </>
          )}
        </rawMaterialManagementContext.Consumer>
      </RawMaterialManagementState>
    </ApplicationState>
  );
};

export default SupplierRequestPostValidations;
