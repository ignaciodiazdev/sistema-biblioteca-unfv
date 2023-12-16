import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDocument } from "../../hooks";
import { CardDetalle } from '../../components/Client/documents'

export const DocumentoDetalle = () => {

  const { documents, loading, error, getDocumentById } = useDocument();
  const { id } = useParams();

  useEffect(() => {
    getDocumentById(id);
  }, []);

  console.log(documents);
  return (
    <Container className="container">
      <h1>Detalle</h1>
      <hr />
      {
        loading ? <p>Cargando...</p> :
          error ? <p>{error}</p> :
            documents?.map((document) => (
              <CardDetalle key={document.id} {...document} />
            ))
      }
    </Container>
  );
};

const Container = styled.div`
  min-height: 75vh;
  h1{
    margin-top: 2.2rem;
  }
  hr{
    margin-bottom: 3rem;
  }
`;
