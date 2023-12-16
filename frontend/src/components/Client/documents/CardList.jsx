import styled from "styled-components";
import { Card } from "./Card";

export const CardList = ({documents, bgColor, textColor, titleColor}) => {
  return (
    <Container className="lista-documentos">
      {documents?.map((documento) => (
        <Card key={documento.id} {...documento} documento={documento} catalogo="true" bgColor={bgColor} textColor={textColor} titleColor={titleColor}/>
      ))}
    </Container>
  );
};

const Container = styled.div``;
