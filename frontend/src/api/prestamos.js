import { BASE_API } from "../utils/constants";

export const getPrestamosIdUserApi = async (id) => {
  try {
    const url = `${BASE_API}/api/prestamos/?usuario=${id}`;
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export const postPrestamosApi = async (data, token ) => {
  try {
    const url = `${BASE_API}/api/prestamos/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);
    if(!response.ok){
      const responseData = await response.json();
      const errorMessage = responseData.detail;
      return errorMessage;
    }else{
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw error;
  }
}