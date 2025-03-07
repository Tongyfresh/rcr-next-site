import axios from 'axios';

const API_URL = 'https://2025-1.ddev.site/jsonapi';

export async function getArticles() {
  const response = await axios.get(`${API_URL}/node/article`);
  return response.data.data;
}
