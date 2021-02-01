const generateError = (text, status=500) => {
  const error = new Error(text);
  error.status = status;
  return error;
}

module.exports = {
  generateError,
}