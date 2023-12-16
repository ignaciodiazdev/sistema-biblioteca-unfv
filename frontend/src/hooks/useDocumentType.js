import { useState } from "react";
import { getDocumentTypeApi } from "../api/documento-tipo";

export function useDocumentType() {
  const [documentType, setdocumentType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDocumentsType = async () => {
    try {
      setLoading(true);
      const response = await getDocumentTypeApi();
      setLoading(false);
      setdocumentType(response);

      return response;
    } catch (error) {
      setError(error);
    }
  };

  return{
    loading,
    documentType,
    error,
    getDocumentsType,
  }
}
