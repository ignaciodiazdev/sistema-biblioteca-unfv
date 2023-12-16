import {BASE_API} from '../utils/constants'

export const getDocumentTypeApi = async () => {
  try {
    const url = `${BASE_API}/api/documento-tipo/`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}