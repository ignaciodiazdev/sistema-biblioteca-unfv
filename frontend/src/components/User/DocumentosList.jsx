import styled from "styled-components";
import { DocumentoCard } from "./";

export const DocumentosList = ({documentosFiltrados, catalogo}) => {
  return (
    <Container className="lista-documentos">
      {
        documentosFiltrados?.map((documento) => {
          return (
            <DocumentoCard
              key={documento.id}
              documento={documento}
              {...documento.documento_data}
              catalogo={catalogo}
            />
          )
        })
      }
    </Container>
  )
}

const Container = styled.div`
  
`;