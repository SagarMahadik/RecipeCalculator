function generate(n) {
  var add = 1,
    max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

  if (n > max) {
    return generate(max) + generate(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10; // Math.pow(10, n) basically
  var number = Math.floor(Math.random() * (max - min + 1)) + min;

  return ('' + number).substring(add);
}

exports.duplicateMobileNumber = {
  email: 'sgrmhdk56@gmail.com',
  password: '12345678',
  passwordConfirm: '12345678',
  mobileNumber: '9967531992',
  brandName: 'Benny',
  userID: '9967531992'
};

exports.duplicateEmail = {
  email: 'sgrmhdk00@gmail.com',
  password: '12345678',
  passwordConfirm: '12345678',
  mobileNumber: '9967531882',
  brandName: 'Benny',
  userID: '9967531882'
};

exports.duplicateEmailAndMobile = {
  email: 'sgrmhdk00@gmail.com',
  password: '12345678',
  passwordConfirm: '12345678',
  mobileNumber: '99675319922',
  brandName: 'Benny',
  userID: '99675319922'
};

exports.validRequest = {
  email: `sgrmhdk${generate(4)}@gmail.com`,
  password: '12345678',
  passwordConfirm: '12345678',
  mobileNumber: generate(10),
  brandName: 'Benny',
  userID: '99675319922'
};

exports.inValidEmail = {
  email: `sgrmhdk${generate(4)}gmail.com`,
  password: '12345678',
  passwordConfirm: '12345678',
  mobileNumber: 99675319922,
  brandName: 'Benny',
  userID: '99675319922'
};

exports.missingMobileNumberUserID = {
  email: `sgrmhdk${generate(4)}@gmail.com`,
  password: '12345678',
  passwordConfirm: '12345678',
  mobileNumber: '',
  brandName: 'Benny',
  userID: ''
};

exports.missingPasswordPasswordConfirm = {
  email: `sgrmhdk${generate(4)}@gmail.com`,
  password: '',
  passwordConfirm: '',
  mobileNumber: '99675319922',
  brandName: 'Benny',
  userID: '99675319922'
};

exports.mismatchPasswordPasswordConfirm = {
  email: `sgrmhdk${generate(4)}@gmail.com`,
  password: '12345678',
  passwordConfirm: '12345677',
  mobileNumber: 9967451992,
  brandName: 'Benny',
  userID: '9967451992'
};

exports.mismatchUserIdMobNumber = {
  email: `sgrmhdk${generate(4)}@gmail.com`,
  password: '12345678',
  passwordConfirm: '9821514875',
  mobileNumber: generate(10),
  brandName: 'Benny',
  userID: '982151487'
};

exports.missingBrandName = {
  email: `sgrmhdk${generate(4)}@gmail.com`,
  password: '12345678',
  passwordConfirm: '12345678',
  mobileNumber: 9967451992,
  brandName: '',
  userID: '9967451992'
};

exports.missingEmail = {
  email: '',
  password: '12345678',
  passwordConfirm: '12345678',
  mobileNumber: 9967451992,
  brandName: 'Benny',
  userID: '9967451992'
};
