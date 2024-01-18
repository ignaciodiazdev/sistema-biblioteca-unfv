import { useState } from "react";
import { getActividadesApi } from "../api/actividades";

export function useActividad() {
  const [actividades, setActividades] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getActividades = async () => {
    try {
      setLoading(true);
      const response = await getActividadesApi();
      setLoading(false);
      setActividades(response);

      return response;

    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    actividades,
    error,
    setError,
    getActividades,
  };
}