import React from 'react';
import Registration from 'components/Singularity/OwnerView/Authentication/Components/Registration/Register.js';
import RegisterValidations from 'components/Singularity/OwnerView/Authentication/Components/Registration/RegisterValidations.js';
import MakeRegisterRequest from 'components/Singularity/OwnerView/Authentication/Components/Registration/MakeRegisterRequest.js';

const RegistrationMainComponent = () => {
  return (
    <div>
      <Registration />
      <RegisterValidations />
      <MakeRegisterRequest />
    </div>
  );
};

export default RegistrationMainComponent;
