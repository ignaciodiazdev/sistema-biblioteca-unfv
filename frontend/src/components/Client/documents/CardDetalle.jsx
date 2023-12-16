import styled from "styled-components";

export const CardDetalle = ({
  id,
  titulo,
  descripcion,
  imagen,
  tipo_data,
  idioma_data,
  autores_data,
  anio_publicacion,
  isbn,
  cantidad,
}) => {
  return (
    <Container>
      <section className="documento">
        <div className="documento__info">
          <div className="documento__info__imagen item">
            <img src={imagen} alt={titulo} />
          </div>
          <div className="documento__info__general item">
            <h3>{titulo}</h3>
            <p>
              Descripción: <span>{descripcion}</span>
            </p>
            <div className="documento__info__general__autores">
              <p>
                Autor:{" "}
                {autores_data.map((autor) => (
                  <span key={autor.id}>
                    {autor.nombre} {autor.apellidos}
                  </span>
                ))}
              </p>
            </div>
            <p>
              Tipo: <span>{tipo_data.tipo}</span>
            </p>
            <p>
              Idioma: <span>{idioma_data.idioma}</span>
            </p>
            <p>
              Fecha de Publicación: <span>{anio_publicacion}</span>
            </p>
            <p>
              ISBN: <span>{isbn}</span>
            </p>
            <p>
              Cantidad:
              <span className="cantidad">
                {cantidad > 0 ? " Disponible" : "No Disponible"}
              </span>
            </p>
            {/* <div className="reservar">
              <button>Reservar</button>
            </div> */}
          </div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  .documento {
    @media screen and (min-width: 1200px) {
      padding-left: 40px;
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 3rem;
      }

      &__imagen {
        display: flex;
        justify-content: center;
        width: 100%;
        @media screen and (min-width: 768px) {
          max-width: 300px;
        }
        img {
          width: 100%;
          height: 100%;
          width: 300px;
          object-fit: cover;
        }
      }
      &__general {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        p {
          font-size: 1rem;
          font-weight: bold;
          color: #e7b11b;
          span {
            font-weight: 400;
            color: #ffffffc7;
          }
        }
        &__autores {
          & > *:not(:last-child)::after {
            content: ", ";
          }
        }
      }
    }
    .reservar {
      width: 100%;
      display: flex;

      button {
        width: 100%;
        max-width: 150px;
        background: #1a67dcfb;
        border: none;
        border-radius: 5px;
        margin-top: 10px;
        padding: 0.2rem 0rem;
        transition: all 0.3s ease-in;
        color: #fff;
        &:hover {
          background: #0a57cafa;
        }
      }
    }
  }
`;
