export const isEmpty = field => {
  if (field == '') {
    return true;
  } else {
    return false;
  }
};

export const isInValidEmail = enteredEmail => {
  var emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  if (!emailPattern.test(enteredEmail)) {
    return true;
  } else {
    return false;
  }
};

export const isInValidIndianMobileNumber = enteredMobile => {
  console.log(enteredMobile);
  var indianMobilePattern = new RegExp(/^[789]\d{9}$/i);
  if (!indianMobilePattern.test(enteredMobile)) {
    return true;
  } else {
    return false;
  }
};

export const isNotMinLength = (field, minLength) => {
  console.log(field);
  if (field.length < minLength) {
    return true;
  } else {
    return false;
  }
};

export const areNotSame = (firstEntry, secondEntry) => {
  if (firstEntry !== secondEntry) {
    return true;
  } else {
    return false;
  }
};
