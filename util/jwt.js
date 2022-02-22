import jwt from 'jsonwebtoken';
const { JWT_SECRET, JWT_EXPIRY } = require('../config');

/**
 * Export an object with createAuthToken function that signs the JWT 
 * for the user when they are created or log in.
 */

module.exports = {

  // createAuthToken: function(user) {
  createAuthToken: (user) => {
    return jwt.sign({ user }, JWT_SECRET, {
      subject: user,
      expiresIn: JWT_EXPIRY
    });
  },

};