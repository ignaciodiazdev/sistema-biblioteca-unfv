import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Buscador, Loading, NoResults } from "../../components/Common";
import { CardList } from "../../components/Client/documents";
import { useDocument, useDocumentType } from "../../hooks";

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

  return (
    <>
      <Container className="container d-flex flex-column gap-4">
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
          <CardList documents={documents}/>
        )}
        {documents?.length === 0 && loading !== true && (
          <NoResults />
        )}
      </Container>
    </>
  );
};

const Container = styled.section`
  padding-top: 1.5rem;
  min-height: 100vh;
  @media screen and (min-width: 992px) {
    .lista-documentos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }
`;
