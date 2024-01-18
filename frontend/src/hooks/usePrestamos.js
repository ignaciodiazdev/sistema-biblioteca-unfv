import { useState } from "react";
import { getPrestamosIdUserApi, postPrestamosApi } from "../api/prestamos";
import { useApp } from '.'

export function usePrestamos() {
  const [prestamos, setPrestamos] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { auth } = useApp();

  const getPrestamosIdUser = async (id) => {
    try {
      setLoading(true);
      const response = await getPrestamosIdUserApi(id);
      setLoading(false);
      setPrestamos(response);

      return response;

    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const postPrestamos = async (data) => {
    try {
      setLoading(true);
      const response = await postPrestamosApi(data, auth.token);
      setLoading(false);
      return response;

    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return {
    loading,
    prestamos,
    error,
    setError,
    getPrestamosIdUser,
    postPrestamos,
  };
}
