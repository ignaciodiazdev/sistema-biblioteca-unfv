import styled from "styled-components";
import imgSearch from "../../assets/User/imgSearch.svg";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDocumentType } from "../../hooks";
import { Loading, NoResults } from "../../components/Common";
import { DocumentosList } from "../../components/User";
import { BASE_API } from "../../utils/constants";

export const Catalogo2 = () => {
  const { documentType, getDocumentsType } = useDocumentType();
  const [loading, setLoading] = useState(null);
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");
  const [titulo, setTitulo] = useState("");
  const [documentosFiltrados, setDocumentosFiltrados] = useState(null);
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    obtenerTipos();
  }, []);

  const obtenerTipos = async () => {
    await getDocumentsType();
  };

  const obtenerDocumentos = async () => {
    try {
      setLoading(true);
      const id = 1;
      const url = `${BASE_API}/api/inventarios/?biblioteca=${id}`;
      const response = await fetch(url);
      const documentosData = await response.json();

      const documentosFiltrados = documentosData.filter((documento) => {
        const tipoValido = tipoSeleccionado === '' || documento.documento_data.tipo_data.tipo === tipoSeleccionado;
        const tituloValido = titulo === '' || documento.documento_data.titulo.toLowerCase().includes(titulo.toLowerCase());

        return tipoValido && tituloValido;
      });
      setApiCalled(true); // Marcar que la API ha sido llamada
      setTimeout(() => {
        setLoading(false);
        setDocumentosFiltrados(documentosFiltrados);
      }, 1200);

    } catch (error) {
      console.error("Error al obtener documentos:", error);
    }
  };

  // Filtrar documentos cuando se hace clic en el botón
  const handleFiltrarClick = () => {
    if (titulo.trim().length > 0) {
      obtenerDocumentos();
    } else {
      toast.error("Ingrese un valor a buscar");
    }
  };

  return (
    <Container>
      <section className="d-flex flex-column gap-4">
        <h1 className="text-center">Catálogo Virtual</h1>
        <div className="d-flex  flex-column gap-2">
          <div className="d-flex flex-column flex-md-row gap-2">
            <select onChange={(e) => setTipoSeleccionado(e.target.value)} className="px-2">
              <option value="">Todos los tipos</option>
              {
                documentType?.map((tipo) => (
                  <option key={tipo.id} value={tipo.tipo}>
                    {tipo.tipo}
                  </option>
                ))
              }
            </select>
            <input
              type="text"
              className="px-2 w-50"
              placeholder="Filtrar por título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <button 
              className="btn btn-primary" 
              onClick={handleFiltrarClick}
            >
              Filtrar
            </button>
          </div>
        </div>
        {documentosFiltrados?.length === 0 && loading !== true && <NoResults />}
        {documentosFiltrados === null && loading === null && (
          <div className="imgSearch">
            <img className="" src={imgSearch} />
            <p>Busca tus libros, tesis, artículos, etc...</p>
          </div>
        )}
        {loading ? (
          <div className="">
            <Loading />
          </div>
        ) : (
          <DocumentosList 
            documentosFiltrados = {documentosFiltrados}             
            catalogo={true}
          />
        )}
      </section>
    </Container>
  );
};

const Container = styled.div`
  .lista-documentos {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    @media screen and (min-width: 1250px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  .ant-card {
    border: none !important;
  }
  .imgSearch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2.5rem;
    img {
      width: 240px;
      height: 240px;
    }
    p {
      font-size: 1.1rem;
      color: #848383;
    }
  }
`;
