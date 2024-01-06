import { BASE_API } from "../utils/constants";

export const getInventarioByBibliotecaIdApi = async (id) => {
  try {
    const url = `${BASE_API}/api/inventarios/?biblioteca=${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}