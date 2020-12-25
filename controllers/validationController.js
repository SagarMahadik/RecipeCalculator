const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
exports.isUserIDMoblieMisMatch = catchAsync(async (req, res, next) => {
  const { userID, mobileNumber } = req.body;
  if (userID != mobileNumber) {
    return next(
      new AppError(
        'Invalid input data. Mobile number and UserId do not match!',
        400
      )
    );
  }

  next();
});
