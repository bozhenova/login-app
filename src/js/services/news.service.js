import axios from '../plugins/axios';

export async function getNews() {
  try {
    const response = await axios.get(
      `/news`,
      JSON.stringify({ email, password })
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
}
