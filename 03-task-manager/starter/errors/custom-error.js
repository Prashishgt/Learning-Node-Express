class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (mes, statusCode) => {
  return new CustomApiError(mes, statusCode);
};

module.exports = { createCustomError, CustomApiError };
