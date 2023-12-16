import { BASE_API } from "../utils/constants";

export const getDocumentApi = async (searchType, searchTerm) => {
  try {
    const url = `${BASE_API}/api/documentos/?titulo__icontains=${searchTerm}&tipo=${searchType}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export const getDocumentByIdApi = async (id) => {
  try {
    const url = `${BASE_API}/api/documentos/?id=${id}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
