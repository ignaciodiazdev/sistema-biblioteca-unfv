import styled from "styled-components";

export const NoResults = () => {
  return (
    <Container>
      <div className="no-results">
        <p>No se encontraron resultados... 😓</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .no-results {
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
  }
`;
