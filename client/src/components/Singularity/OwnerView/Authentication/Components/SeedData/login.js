export const loginFields = [
  {
    fieldLabel: 'Email',
    type: 'Email',
    name: 'loginEmail',
    required: true,
    requiredErrorMessage: 'Please enter email',
    validationErrorMessage: "Doesn't look like an email"
  },
  {
    fieldLabel: 'Password',
    type: 'password',
    name: 'loginPassword',
    required: true,
    requiredErrorMessage: 'Please enter password'
  }
];
