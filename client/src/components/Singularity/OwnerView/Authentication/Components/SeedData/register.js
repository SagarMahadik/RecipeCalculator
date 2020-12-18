export const registrationFields = [
  {
    fieldLabel: 'Brand name',
    type: 'text',
    name: 'brandName',
    requiredErrorMessage: 'Please enter Brand name'
  },
  {
    fieldLabel: 'Mobile Number',
    type: 'number',
    name: 'mobileNumber',
    requiredErrorMessage: 'Please enter Mobile number',
    validationErrorMessage: "Doesn't look like Mobile number"
  },
  {
    fieldLabel: 'Email',
    type: 'Email',
    name: 'email',
    requiredErrorMessage: 'Please enter email',
    validationErrorMessage: "Doesn't look like an email"
  },
  {
    fieldLabel: 'Password',
    type: 'password',
    name: 'password',
    requiredErrorMessage: 'Please enter password',
    validationErrorMessage: 'Password should be more than 8 characters'
  },
  {
    fieldLabel: 'Confirm password',
    type: 'password',
    name: 'passwordConfirm',
    requiredErrorMessage: 'Please enter confirm password',
    validationErrorMessage: 'Password do not match!'
  }
];
