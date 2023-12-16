import styled from "styled-components";
import { CardPerfil } from "../../components/Common";
import bannerNota from "../../assets/User/banner-nota.png";
export const Perfil = () => {
  return (
    <Container>
      <CardPerfil padding="30px" />
      <div className="recordatorio-perfil">
        <p>
          <span>
            Para realizar un cambio en los datos de tu perfil debes de acercarte
            a la biblioteca.
          </span>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .recordatorio-perfil {
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 1px solid #e4e4e4;
  }
`;
