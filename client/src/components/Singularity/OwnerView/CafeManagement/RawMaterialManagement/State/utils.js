export const calcualatePriceWithoutGST = (price, GSTPercentage) => {
  return Number(price) - (Number(price) * Number(GSTPercentage)) / 100;
};

export const calculatePriceWithGST = (price, GSTPercentage) => {
  return Number(price) + (Number(price) * Number(GSTPercentage)) / 100;
};
