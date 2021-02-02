export const setFieldInitialValue = field => {
  let fieldValue = '';
  const lovalStorageValue = localStorage.getItem(`${field}`);

  if (lovalStorageValue == null) {
    return fieldValue;
  } else {
    return lovalStorageValue;
  }
};
