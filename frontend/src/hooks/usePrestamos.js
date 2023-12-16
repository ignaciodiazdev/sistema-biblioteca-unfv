import { useState } from "react";
import { getPrestamosIdUserApi, postPrestamosApi } from "../api/prestamos";
import { useApp } from '.'
import { toast } from 'react-toastify'
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
      // await postPrestamosApi(data, auth.token);
      const response = await postPrestamosApi(data, auth.token);
      if(typeof response === 'string') {
        toast.error(response)
      }
      setLoading(false);

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
