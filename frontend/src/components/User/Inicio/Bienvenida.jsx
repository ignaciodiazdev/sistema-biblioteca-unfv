import styled from "styled-components";
import { Link } from "react-router-dom";
import young from "../../../assets/User/young-boy.png";

export const Bienvenida = () => {
  return (
    <Container>
      <section className="bienvenida">
        <div className="row">
          <div className="col-md-7 contenedor-info">
            <h1 className="">Bienvenido a la Biblioteca Virtual de la UNFV</h1>
            <p>
              Reserva y realiza tu Prestámo con un Click. Explora tu biblioteca
              virtual, puedes reservar y prestar desde libros hasta artículos.
              Tu búsqueda de conocimiento empieza ahora.
            </p>
            <div className="contenedor-boton">
              <Link className="btn btn-primary" to="/plataforma/catalogo">
                Ver Catálogo
              </Link>
            </div>
          </div>
          <div className="col-md-5 contenedor-img">
            <img
              src={young}
              style={{ maxWidth: "300px" }}
              alt="undraw-book-lover-light-63ed"
              border="0"
            />
          </div>
        </div>
      </section>
    </Container>
  )
}

const Container = styled.div`
  h1 {
    font-size: 50px;
    font-weight: 700;
    color: #ffffffd4;
  }

  .bienvenida {
    background: #560489;
    box-shadow: -1px 2px 9px 1px #0000006e;
    background-image: linear-gradient(
        294deg,
        rgba(33, 37, 41, 0.01),
        #0b5096 85%
      ),
      radial-gradient(
        ellipse at top left,
        rgba(13, 110, 253, 0.5),
        transparent 50%
      ),
      radial-gradient(
        ellipse at top right,
        rgba(255, 228, 132, 0.5),
        transparent 50%
      ),
      radial-gradient(
        ellipse at center right,
        rgba(112.520718, 44.062154, 249.437846, 0.5),
        transparent 50%
      ),
      radial-gradient(
        ellipse at center left,
        rgba(214, 51, 132, 0.5),
        transparent 50%
      );
    padding: 0px 40px;
    border-radius: 10px;

    .contenedor-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 60px 0;
      gap: 30px;
      p {
        font-size: 20px;
        color: #ffffffc8;
      }
    }
    .contenedor-img {
      display: flex;
      justify-content: center;
      align-items: end;
      img{
        width: 100%;
      }
    }
    .contenedor-boton {
      a {
        font-size: 18px;
        background: #ff6e39;
        border: none;
      }
    }
  }
`;