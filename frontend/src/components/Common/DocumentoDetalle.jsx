import styled from "styled-components";
import { Image } from "antd";
import iconLibro from "../../assets/Client/libro-default.svg";
export const DocumentoDetalle = ({ documento }) => {
  return (
    <Container>
      <div className="documento">
        <div className="documento__header">
          <div className="documento__header__imagen">
            {documento?.imagen ? (
              <Image src={documento?.imagen} />
            ) : (
              <img src={iconLibro} />
            )}
          </div>
          <div className="documento__header__title">
            <p>{documento?.tipo_data.tipo}</p>
            <p>{documento?.titulo}</p>
          </div>
        </div>
        <div className="documento__body">
          <div className="documento__body__detalle">
            <h5>Detalle</h5>
            <hr />
            <div className="documento__body__detalle__item">
              <p>ISBN</p>
              <p> {documento?.isbn}</p>
            </div>
            <div className="documento__body__detalle__item">
              <p>Autor</p>
              <p>
                {documento?.autores_data?.map((autor) => (
                  <span key={autor.id}>
                    {autor.nombre} {autor.apellidos}. &nbsp;
                  </span>
                ))}
              </p>
            </div>
            <div className="documento__body__detalle__item">
              <p>Descripción</p>
              <p>{documento?.descripcion}</p>
            </div>
            <div className="documento__body__detalle__item">
              <p>Idioma</p>
              <p>{documento?.idioma_data.idioma}</p>
            </div>
            <div className="documento__body__detalle__item">
              <p>Año de Publicación</p>
              <p>{documento?.anio_publicacion}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .documento {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    &__header {
      display: grid;
      grid-template-columns: 1fr 4fr;
      gap: 20px;
      &__imagen {
        img {
          width: 80px;
          height: 90px;
          border: 1px solid #dedede;
        }
      }
      &__title {
        & > :first-child {
          color: #767676;
        }
        font-weight: bold;
      }
    }
    &__body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      hr {
        margin: 0;
      }
      &__detalle {
        &__item {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 20px;
          padding: 5px 0;
          & > :first-child {
            font-weight: 500;
          }
        }
      }
    }
  }
`;
