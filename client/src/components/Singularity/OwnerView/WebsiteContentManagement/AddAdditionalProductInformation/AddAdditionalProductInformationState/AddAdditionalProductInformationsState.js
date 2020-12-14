import React, { useReducer, useRef, useEffect } from 'react';
import {
  SET_LOADING,
  NEXT_STEP,
  PREVIOUS_STEP,
  UPDATE_FIELD,
  SET_FILENAME,
  SET_FILEURL,
  POST_ADDON,
  COMPLETE_FORM
} from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAdditionalProductInformation/AddAdditionalProductInformationState/types.js';
import addAdditionalProductInformationContext from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAdditionalProductInformation/AddAdditionalProductInformationState/addAdditionalProductInformationContext.js';
import addAdditionalProductInformationReducer from 'components/Singularity/OwnerView/WebsiteContentManagement/AddAdditionalProductInformation/AddAdditionalProductInformationState/addAdditionalProductInformationReducer.js';
import axios from 'axios';

const AddAdditionalProductInformationPageState = props => {
  const initialState = {
    additionalInformationName: '',
    additionalInformation: '',
    additionalInformationIconURL: '',
    selectedFileName: '',
    loading: false,
    isComplete: false
  };

  const fileInputRef = useRef();

  const [state, dispatch] = useReducer(
    addAdditionalProductInformationReducer,
    initialState
  );

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  const setAddOnItemType = additionalInformationName => {
    console.log(additionalInformationName);
    switch (additionalInformationName) {
      case 'Product Status':
        return 'status';
      case 'Product Variant':
        return 'variant';
    }
  };

  useEffect(() => {
    const {
      additionalInformation,
      additionalInformationIconURL,
      additionalInformationName
    } = state;

    const addDataToDB = async (
      additionalInformation,
      additionalInformationIconURL,
      additionalInformationName
    ) => {
      {
        const additionalInformationType = setAddOnItemType(
          additionalInformationName
        );

        const addOnBody = JSON.stringify({
          additionalInformation,
          additionalInformationIconURL,
          additionalInformationType
        });
        console.log(addOnBody);

        const config = {
          headers: {
            'Content-Type': 'application/JSON'
          }
        };
        const res = await axios.post(
          '/api/v1/additionalProductInfomation',
          addOnBody,
          config
        );
        console.log(res);

        dispatch({
          type: COMPLETE_FORM
        });
      }
    };

    if (additionalInformationIconURL !== '') {
      addDataToDB(
        additionalInformation,
        additionalInformationIconURL,
        additionalInformationName
      );
    } else {
      console.log('In use effect');
    }
  }, [state.additionalInformationIconURL]);

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
    <addAdditionalProductInformationContext.Provider
      value={{
        additionalInformationName: state.additionalInformationName,
        additionalInformation: state.additionalInformation,
        additionalInformationIconURL: state.additionalInformationIconURL,
        selectedFileName: state.selectedFileName,
        fileInputRef,
        loading: state.loading,
        isComplete: state.isComplete,
        handleChangeFor,
        onFileSelect,
        onSubmit
      }}
    >
      {props.children}
    </addAdditionalProductInformationContext.Provider>
  );
};

export default AddAdditionalProductInformationPageState;
