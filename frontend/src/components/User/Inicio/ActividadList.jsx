import styled from "styled-components";
import { ActividadCard } from "./ActividadCard";

export const ActividadList = ({actividades}) => {
  
  actividades = actividades?.filter((actividad) => {
    return actividad.estado_data.nombre !== "Finalizado"
  })

  return (
    <Container>
      <section className="actividades">
        {
          actividades?.map((actividad) => {
            return (
              <ActividadCard
                key={actividad.id}
                {...actividad}
              />
            )
          })
        }
      </section>
    </Container>
  )
}

const Container = styled.div`
  
`;