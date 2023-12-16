import styled from "styled-components";
import 'ldrs/tailspin'

export const Loading = () => {

  return (
    <Container className="container">
      <section>
        <l-tailspin
          size="40"
          stroke="5"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="1"
          color="orange" 
        ></l-tailspin>
        <span>Cargando...</span>
      </section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img{
    width: 500px;
    height: 90px;
    object-fit: cover;
  }
`;
