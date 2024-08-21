import styled from "styled-components";
import { ActividadList, Bienvenida } from "../../components/User/Inicio";

import { useEffect } from "react";
import { useActividad } from "../../hooks";

export const Inicio = () => {
  const { actividades, getActividades } = useActividad();
  useEffect(() => {
    getActividades();
  }, []);

  return (
    <Container>
      <Bienvenida />
      <h2 className="mt-5 text-center">Próximas Actividades</h2>
      <ActividadList actividades={actividades} />
    </Container>
  );
};

const Container = styled.div`
  .actividades {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin: 40px 0;
    @media screen and (min-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1500px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
