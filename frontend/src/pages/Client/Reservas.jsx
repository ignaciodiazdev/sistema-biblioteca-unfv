import styled from "styled-components";
import { useApp, usePrestamos } from "../../hooks";
import { useEffect } from "react";
import { Card } from "../../components/Client/documents";

export const Reservas = () => {
  const { auth } = useApp();
  const { prestamos, getPrestamosIdUser } = usePrestamos();

  useEffect(() => {
    getPrestamosIdUser(auth.me.id);
  }, []);

  let prestamosFiltrados = prestamos?.filter(
    (prestamo) => prestamo.estado_prestamo === "RESERVADO"
  );
  console.log(prestamos);
  console.log(prestamosFiltrados);


  return (
    <Container className="container">
      <h1 className="mb-0">Mis Reservas</h1>
      <hr className="pb-4"/>
      <section className="lista-reservas">
        {prestamosFiltrados?.length === 0 ? (
          <div className="lista-prestamos__notfound">
            <h4>No tienes préstamos realizados</h4>
          </div>
        ) : null}
        {prestamosFiltrados?.map((prestamo) => (
          <Card
            key={prestamo.id}
            {...prestamo.documento_data}
            {...prestamo}
          />
        ))}
      </section>
    </Container>
  )
}

const Container = styled.div`
  min-height: 80vh;
  h1 {
    margin: 3rem 0;
  }
  .lista-reservas {
    @media screen and (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    &__notfound {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 500px;
    }
  }
`;