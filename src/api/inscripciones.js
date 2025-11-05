const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const enrollInCourse = async (userId, courseId) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('No se encontró token de autenticación');
  }

  const response = await fetch(`${API_URL}/enrollments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      id_user_platform: userId,
      id_course: courseId,
      status: 'Interesado',
      payment_order_url: 'local'
    })
  });

  if (response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    throw new Error('UNAUTHORIZED');
  }

  if (!response.ok) {
    const errorData = await response.json();
    // Simplificar el mensaje de error para el usuario
    if (errorData.detail && errorData.detail.includes('already enrolled')) {
      throw new Error('Ya estás inscrito en este curso');
    }
    throw new Error(errorData.detail || 'Error al inscribirse en el curso');
  }

  return await response.json();
};
