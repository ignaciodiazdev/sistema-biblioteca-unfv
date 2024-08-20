import { useState } from "react";
import { getDocumentApi, getDocumentByIdApi } from "../api/documentos";

export function useDocument() {
  const [documents, setDocuments] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getDocuments = async (searchType, searchTerm) => {
    try {
      setLoading(true);
      const response = await getDocumentApi(searchType, searchTerm);
      setTimeout(() => {
        setLoading(false);
        setDocuments(response);
      }, 1200);

      return response;
    } catch (error) {
      setError(error);
    }
  };

  const getDocumentById = async (id) => {
    try {
      setLoading(true);
      const response = await getDocumentByIdApi(id);

      setLoading(false);
      setDocuments(response);

      return response;
    } catch (error) {
      setError(error);
    }
  };

  return {
    loading,
    documents,
    error,
    getDocuments,
    getDocumentById,
  };
}
