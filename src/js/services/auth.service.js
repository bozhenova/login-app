import axios from '../plugins/axios';

/**
 * Function login. Make login request to API.
 * @param {string} email
 * @param {string} password
 */

export async function login(email, password) {
  try {
    const response = await axios.post(
      `/auth/login`,
      JSON.stringify({ email, password })
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
}
