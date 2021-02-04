const jwt = require('jsonwebtoken');

module.exports = (token) => {
  if (token) {
    return jwt.verify(token, process.env.HASHPASS, (error, decoded) => {
      if (!error && decoded) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    return false;
  }
};
