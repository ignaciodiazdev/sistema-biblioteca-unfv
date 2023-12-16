import styled from "styled-components";
import {CardPerfil} from '../../components/Common'


export const Perfil = () => {


  return (
    <Container className="container">
      <h1 className="mb-0">Mi Perfil</h1>
      <hr className="pb-4"/>
      <CardPerfil />

    </Container>
  );
};

const Container = styled.div`
  min-height: 80vh;
  h1{
    margin: 3rem 0;
  }
`;
