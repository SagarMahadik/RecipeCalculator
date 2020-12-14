import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useContext
} from 'react';

import axios from 'axios';
import AddAddOnPage1 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnPage1';
import AddAddOnPage2 from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnPage2';

import AddAddOnItemsState from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnItemsState/AddAddOnItemState';
import addAddOnItemContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnItemsState/addAddOnItemContext';

function AddAddOn() {
  const AddAddOnItemContext = useContext(addAddOnItemContext);
  const { step } = AddAddOnItemContext;
  console.log(step);

  switch (step) {
    case 1:
      return <AddAddOnPage1 />;

    case 2:
      return <AddAddOnPage2 />;
  }
}

export default AddAddOn;
