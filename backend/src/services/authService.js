const { findUserByEmail } = require('../models/userModel');

const login = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user) {
    return { success: false, message: 'Usuario no encontrado' };
  }

  if (user.password === password) {
    return { success: true, message: 'Login exitoso', username: user.username };
  }

  return { success: false, message: 'Contraseña incorrecta' };
};

module.exports = { login };
