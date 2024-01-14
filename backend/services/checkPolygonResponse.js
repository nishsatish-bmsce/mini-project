module.exports = checkResponseValidity = (response) => {
  if (response.resultCount === 0) {
    throw new Error('Either ticker is invalid or something went wrong');
  }
}