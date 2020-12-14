import React, { useReducer, useRef, useEffect } from 'react';
import addAddOnItemContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnItemsState/addAddOnItemContext';
import addAddOnItemReducer from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnItemsState/addAddOnItemReducer';
import {
  SET_LOADING,
  NEXT_STEP,
  PREVIOUS_STEP,
  UPDATE_FIELD,
  SET_FILENAME,
  SET_FILEURL,
  POST_ADDON,
  COMPLETE_FORM
} from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAddOnItems/AddAddOnItemsState/types';

import axios from 'axios';

const AddAddOnItemState = props => {
  const initialState = {
    addOnCategory: '',
    itemName: '',
    itemPrice: '',
    itemIconURL: '',
    itemIconFileName: '',
    step: 1,
    loading: false,
    isComplete: false
  };

  const fileInputRef = useRef();

  const [state, dispatch] = useReducer(addAddOnItemReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  const setAddOnItemType = addOnCategory => {
    console.log(addOnCategory);
    switch (addOnCategory) {
      case 'Add On':
        return 'addOn';
      case 'Flavours':
        return 'flavour';
    }
  };

  useEffect(() => {
    const { itemName, itemIconURL, itemPrice, addOnCategory } = state;

    const addDataToDB = async (
      itemName,
      itemPrice,
      itemIconURL,
      addOnCategory
    ) => {
      {
        const addOnType = setAddOnItemType(addOnCategory);

        const addOnBody = JSON.stringify({
          itemName,
          itemIconURL,
          itemPrice,
          addOnType
        });
        console.log(addOnBody);

        const config = {
          headers: {
            'Content-Type': 'application/JSON'
          }
        };
        const res = await axios.post('/api/v1/addOn', addOnBody, config);
        console.log(res);

        dispatch({
          type: COMPLETE_FORM
        });
      }
    };

    if (itemIconURL !== '') {
      addDataToDB(itemName, itemPrice, itemIconURL, addOnCategory);
    } else {
      console.log('In use effect');
    }
  }, [state.itemIconURL]);

  const nextStep = () => {
    dispatch({
      type: NEXT_STEP,
      payload: state.step
    });
  };

  const previousStep = () => {
    dispatch({
      type: PREVIOUS_STEP
    });
  };

  const handleChangeFor = input => e => {
    {
      dispatch({
        type: UPDATE_FIELD,
        payload: { input, value: e.target.value }
      });
    }
  };

  const onFileSelect = input1 => e => {
    dispatch({
      type: SET_FILENAME,
      payload: { input1, value1: e.target.files[0].name }
    });
  };

  const fileUpload = fileInputRef => {
    setLoading();
    const fileForUpload = fileInputRef.current.files[0];

    const formData = new FormData();
    formData.append('file', fileForUpload);
    formData.append('upload_preset', 'xprl6rwq');
    const options = {
      method: 'POST',
      body: formData
    };

    return fetch(
      'https://api.Cloudinary.com/v1_1/antilibrary/image/upload',
      options
    )
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: SET_FILEURL,
          payload: res.secure_url
        })
      );
  };

  const onSubmit = e => {
    e.preventDefault();
    fileUpload(fileInputRef);
  };
  return (
    <addAddOnItemContext.Provider
      value={{
        addOnCategory: state.addOnCategory,
        itemName: state.itemName,
        itemPrice: state.itemPrice,
        itemIconURL: state.itemIconURL,
        itemIconFileName: state.itemIconFileName,
        step: state.step,
        fileInputRef,
        loading: state.loading,
        isComplete: state.isComplete,
        nextStep,
        previousStep,
        handleChangeFor,
        onFileSelect,
        onSubmit
      }}
    >
      {props.children}
    </addAddOnItemContext.Provider>
  );
};

export default AddAddOnItemState;
