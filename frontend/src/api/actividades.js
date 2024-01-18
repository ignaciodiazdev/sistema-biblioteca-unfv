import { BASE_API } from "../utils/constants";

export const getActividadesApi = async () => {
  try {
    const url = `${BASE_API}/api/actividades/`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}