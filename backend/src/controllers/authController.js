const { login } = require('../services/authService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const isValid = await login(email, password);

  res.json(isValid);
};

module.exports = { loginUser };
