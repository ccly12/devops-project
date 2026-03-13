const { findUserByEmail } = require('../models/userModel');

const login = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user) return false;

  return user.password === password;
};

module.exports = { login };
