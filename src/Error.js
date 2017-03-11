class Error {
  constructor (message, detailedMessage) {
    this.error = [{
      _attr: {
        message
      }
    }, detailedMessage];
  }
}

module.exports = Error;
