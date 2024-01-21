import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Card } from "antd";
import { Buscador, DrawerForm, DrawerRight, Loading, NoResults } from "../../components/Common";
import { CardList } from "../../components/Client/documents";
import { useDocument, useDocumentType } from "../../hooks";
import { useMediaQuery } from 'react-responsive'
import imgSearch from '../../assets/User/imgSearch.svg';

export const Catalogo = () => {
  const [search, setSearch] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchType, setSearchType] = useState("");
  const { documents, loading, getDocuments } = useDocument();
  const { documentType, getDocumentsType } = useDocumentType();
  useEffect(() => {
    if (search != "") {
      getDocuments(searchType, search);
    }
    getDocumentsType();
  }, [isFiltered]);
  const handleClickSearch = () => {
    if (search.trim().length > 0) {
      setIsFiltered(!isFiltered);
    } else {
      toast.error("Ingrese un valor a buscar");
    }
  };
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return (
    <Container>
        <section className=" d-flex flex-column gap-4">
          <h1 className="text-center">Catálogo Virtual</h1>
          <Buscador
            {...{
              searchType,
              setSearchType,
              search,
              setSearch,
              handleClickSearch,
              documentType,
            }}
          />
          {loading ? (
            <div className="">
              <Loading />
            </div>
          ) : (
            <CardList documents={documents} bgColor="white" textColor="#0d0d0d" titleColor="#"/>
          )}
          {documents?.length === 0 && loading !== true && (
            <NoResults />
          )}
          { documents === null && loading === null && (
            <div className="imgSearch">
              <img className="" src={imgSearch} />
              <p>Busca tus libros, tesis, artículos, etc...</p>
            </div>
          ) }         
        </section>

    </Container>
  );
};

const Container = styled.div`
  .lista-documentos{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    @media screen and (min-width: 1250px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
  .ant-card{
    border: none !important;
  }
  .imgSearch{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2.5rem;
    img{
      width: 240px;
      height: 240px;
    }
    p{
      font-size: 1.1rem;
      color: #848383;
    }
  }
`;
