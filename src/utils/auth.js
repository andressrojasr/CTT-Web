/**
 * Verifica si el usuario está autenticado
 * @returns {boolean} True si está autenticado
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

/**
 * Obtiene el token del usuario
 * @returns {string|null} Token del usuario
 */
export const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Obtiene el usuario almacenado
 * @returns {object|null} Objeto usuario o null
 */
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

/**
 * Guarda el token y usuario en localStorage
 * @param {string} token - Token de autenticación
 * @param {object} user - Objeto usuario
 */
export const saveAuthData = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  // Emitir evento personalizado para notificar cambios
  window.dispatchEvent(new Event('authChange'));
};

/**
 * Elimina los datos de autenticación
 */
export const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  // Emitir evento personalizado para notificar cambios
  window.dispatchEvent(new Event('authChange'));
};
