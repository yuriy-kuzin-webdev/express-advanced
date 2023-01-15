const ApiError = require("../exceptions/api-error");
const tokenService = require("../service/token-service");

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnAuthorizedError());
    }
    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return next(ApiError.UnAuthorizedError());
    }
    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      return next(ApiError.UnAuthorizedError());
    }
    req.user = userData;
    next();
  } catch (error) {
    return next(ApiError.UnAuthorizedError());
  }
};
