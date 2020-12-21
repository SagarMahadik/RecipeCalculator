export const createSupplierRequestBody = (
  userID,
  supplierName,
  supplierPersonDetails,
  supplierMobileNumber,
  supplierAddress,
  supplierPinCode,
  supplierGSTNumber
) => {
  return JSON.stringify({
    userID,
    supplierName,
    supplierPersonDetails,
    supplierMobileNumber,
    supplierAddress,
    supplierPinCode,
    supplierGSTNumber
  });
};
