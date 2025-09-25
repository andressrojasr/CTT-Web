import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCourses = async () => {
    try {
        const response = await api.get('/courses');
        const data = (response.data);

        if (!data.courses) {
            throw new Error('No se encontraron cursos en la respuesta de la API');
        }

        return data.courses;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            throw new Error('Tiempo de espera agotado. Verifica tu conexión a internet.');
        }
        if (error.response) {
            throw new Error(`Error del servidor: ${error.response.status} - ${error.response.data?.message || 'Error desconocido'}`);
        }
        throw new Error(`Error de red: ${error.message}`);
    }
};


export const getCoursesByCategory = async (category) => {
    try {
        const response = await api.get(`/courses/category/${encodeURIComponent(category)}`);
        const data = (response.data);

        if (!data.courses) {
            throw new Error('No se encontraron cursos en la respuesta de la API');
        }

        return data.courses;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            throw new Error('Tiempo de espera agotado. Verifica tu conexión a internet.');
        }
        if (error.response) {
            throw new Error(`Error del servidor: ${error.response.status} - ${error.response.data?.message || 'Error desconocido'}`);
        }
        throw new Error(`Error de red: ${error.message}`);
    }
};

/**
 * Obtiene un curso específico por su ID
 * @param {number} courseId - ID del curso
 * @returns {Promise<Course>} Datos del curso
 * @throws {Error} Si ocurre un error en la petición
 */
export const getCourseById = async (courseId) => {
    try {
        const response = await api.get(`/courses/${courseId}`);
        return response.data;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            throw new Error('Tiempo de espera agotado. Verifica tu conexión a internet.');
        }
        if (error.response) {
            throw new Error(`Error del servidor: ${error.response.status} - ${error.response.data?.message || 'Error desconocido'}`);
        }
        throw new Error(`Error de red: ${error.message}`);
    }
};

export default api;
