import axios from 'axios';
import API_ENV from '../config/api.config';

/**
 * Function login. Make login request to API.
 * @param {string} email
 * @param {string} password
 */

export async function login(email, password) {
  try {
    const response = await axios.post(
      `${API_ENV}/auth/login`,
      JSON.stringify({ email, password }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
}
