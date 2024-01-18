import styled from "styled-components";
import imgSearch from "../../assets/User/imgSearch.svg";
import { Collapse } from "antd";
import { toast } from "react-toastify";
import { VscSearch } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { useDocumentType } from "../../hooks";
import { Loading, NoResults } from "../../components/Common";
import { DocumentosList } from "../../components/User";
import { BASE_API } from "../../utils/constants";
import { useApp } from "../../hooks";
import { filtrarDocumentos } from "../../utils/filtroAvanzado";
import { BusquedaAvanzadaDocs } from "../../components/User/Catalogo/BusquedaAvanzadaDocs";

export const Catalogo2 = () => {
  const { documentType, getDocumentsType } = useDocumentType();
  const [loading, setLoading] = useState(null);
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");
  const [titulo, setTitulo] = useState("");
  const [documentosFiltrados, setDocumentosFiltrados] = useState(null);
  const [autor, setAutor] = useState("");
  const [anio, setAnio] = useState("");
  const [idioma, setIdioma] = useState("");
  const [isbn, setIsbn] = useState("");
  const [codigoBarras, setCodigoBarras] = useState("");
  const { auth } = useApp();

  useEffect(() => {
    obtenerTipos();
  }, []);

  const obtenerTipos = async () => {
    await getDocumentsType();
  };

  const obtenerDocumentos = async () => {
    const idBiblioteca = auth?.me?.biblioteca;
    try {
      setLoading(true);
      const url = `${BASE_API}/api/inventarios/?biblioteca=${idBiblioteca}`;
      const response = await fetch(url);
      const documentosData = await response.json();

      const documentosFiltrados = filtrarDocumentos(
        documentosData,
        tipoSeleccionado,
        titulo,
        autor,
        anio,
        idioma,
        isbn,
        codigoBarras
      );

      setTimeout(() => {
        setLoading(false);
        setDocumentosFiltrados(documentosFiltrados);
      }, 1200);
    } catch (error) {
      console.error("Error al obtener documentos:", error);
    }
  };

  const existePalabraCampo = () => {
    if (
      titulo.trim().length > 0 ||
      autor.trim().length > 0 ||
      anio.trim().length > 0 ||
      idioma.trim().length > 0 ||
      isbn.trim().length > 0 ||
      codigoBarras.trim().length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFiltrarClick = () => {
    if (existePalabraCampo()) {
      obtenerDocumentos();
    } else {
      toast.error("Ingrese un valor a buscar");
    }
  };

  return (
    <Container>
      <section className="d-flex flex-column gap-4">
        <div className="catalogo-header">
          <h1 className="text-center">Catálogo Virtual</h1>
          <div className="fondo"></div>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex flex-column flex-md-row gap-2 justify-content-center">
            <select
              onChange={(e) => setTipoSeleccionado(e.target.value)}
              className="px-2 form-select"
            >
              <option value="">Todos los tipos</option>
              {documentType?.map((tipo) => (
                <option key={tipo.id} value={tipo.tipo}>
                  {tipo.tipo}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="px-2 buscador"
              placeholder="Filtrar por título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <button className="btn btn-primary btnFiltrar" onClick={handleFiltrarClick}>
              <VscSearch /> Buscar 
            </button>
          </div>
          <div className="busqueda-avanzada">
            <Collapse
              items={[
                {
                  key: "1",
                  label: "Búsqueda avanzada",
                  children: (
                    <BusquedaAvanzadaDocs
                      autor={autor}
                      setAutor={setAutor}
                      anio={anio}
                      setAnio={setAnio}
                      idioma={idioma}
                      setIdioma={setIdioma}
                      isbn={isbn}
                      setIsbn={setIsbn}
                      codigoBarras={codigoBarras}
                      setCodigoBarras={setCodigoBarras}
                    />
                  ),
                },
              ]}
            />
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
            documentosFiltrados={documentosFiltrados}
            catalogo={true}
          />
        )}
      </section>
    </Container>
  );
};

const Container = styled.div`
  .catalogo-header {
    background-image: url(https://i.imgur.com/7hdP2YD.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 30px 40px;
    border-radius: 5px;
    box-shadow: -1px 2px 9px 1px #0000006e;
    position: relative;
    h1 {
      position: relative;
      color: #fff;
      font-size: 3rem;
      font-weight: 600;
      z-index: 2;
    }
    .fondo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background: #00000057;
      z-index: 1;
    }
  }
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
  .form-select{
    font-size: 15px !important;
    border:none;
    padding: 10px 15px !important;
    border-radius: 5px;
    box-shadow: 0px 0px 2px 0px #0000006e;
    @media screen and (min-width: 768px) {
      width: 20%;
      padding: 0 15px !important;
    }
  }
  .buscador {
    width: 100%;
    font-size: 15px;
    color: #545454;
    height: 40px;
    border-radius: 5px;
    padding: 10px 15px !important;
    border:none;
    box-shadow: 0px 0px 2px 0px #0000006e;
    /* border: none; */
  }
  .buscador:focus {
    outline: none;
    /* box-shadow: 0px 0px 4px 0px #570dcc93; */
    box-shadow: 0px 0px 4px 0px #d7750592;
  }
  .btnFiltrar{
    font-size: 17px;
    font-weight: 600;
    @media screen and (min-width: 768px) {
      width: 20%;
    }
    svg{
      margin-right: 5px;

    }
  }
`;
