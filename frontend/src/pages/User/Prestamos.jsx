import styled from "styled-components";
import { useApp, usePrestamos } from "../../hooks";
import { useEffect } from "react";
import { Card } from "../../components/Client/documents";

export const Prestamos = () => {
  const { auth } = useApp();
  const { prestamos, getPrestamosIdUser } = usePrestamos();

  useEffect(() => {
    getPrestamosIdUser(auth.me.id);
  }, []);

  let prestamosFiltrados = prestamos?.filter(
    (prestamo) => prestamo.estado_prestamo === "PRESTADO"
  );
  console.log(prestamos);
  console.log(prestamosFiltrados);

  return (
    <Container>
      <h1 className="mb-0">Mis Préstamos</h1>
      <hr className="pb-4"/>
      <section className="lista-prestamos">
        {prestamosFiltrados?.length === 0 ? (
          <div className="lista-prestamos__notfound">
            <h4>No tienes préstamos realizados...</h4>
          </div>
        ) : null}
        {prestamosFiltrados?.map((prestamo) => (
          <Card
            key={prestamo.id}
            {...prestamo.documento_data}
            {...prestamo}
            bgColor={"white"}
            textColor={"#0d0d0d"}
          />
        ))}
      </section>
    </Container>
  );
};

const Container = styled.div`
  .lista-prestamos {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    @media screen and (min-width: 1250px) {
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
