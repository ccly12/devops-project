const { login } = require('../services/authService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await login(email, password);
  
  res.status(result.success ? 200 : 401).json(result);
};

module.exports = { loginUser };