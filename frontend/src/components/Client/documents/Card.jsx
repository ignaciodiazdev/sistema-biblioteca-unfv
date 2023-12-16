import styled from "styled-components";
import { Link } from "react-router-dom";
import iconLibro from "../../../assets/Client/libro-default.svg";
import { useApp } from "../../../hooks";
import { DrawerRight, DocumentoDetalle } from "../../Common";
import { Button } from "antd";
import { toast } from "react-toastify";

export const Card = ({
  id,
  titulo,
  imagen,
  tipo_data,
  autores_data,
  anio_publicacion,
  isbn,
  cantidad,
  catalogo,
  estado_prestamo,
  fecha_devolucion,
  fecha_prestamo,
  bgColor,
  textColor,
  titleColor,
  documento
}) => {
  const { auth, addToCart } = useApp();

  const handleImageError = (e) => {
    e.target.src = iconLibro;
  };
  const handleCart = (product) => {
    const response = addToCart(product);
    if(response){
      toast.error(response);
    }else{
      toast.success("Producto agregado al carrito");
    }
  }

  return (
    <Container
      className="py-3 p-lg-3"
      cantidad={cantidad}
      bgColor={bgColor}
      textColor={textColor}
      estado_prestamo={estado_prestamo}
    >
      <div className="container">
        <div className="row">
          <div className="col-4 col-md-2 col-xxl-2 containerImg">
            <img src={imagen} alt={titulo} onError={handleImageError} />
          </div>
          <div className="col-8 col-md-10 col-xxl-10 containerDetail">
            <div className="row gap-3 gap-md-0">
              <div className="col-md-8">
                <span className="tipo">{tipo_data.tipo}</span>
                <h5>{titulo}</h5>
                <div className="autores">
                  {autores_data.map((autor) => (
                    <span key={autor.id}>
                      {autor.nombre} {autor.apellidos}
                    </span>
                  ))}
                </div>
                <p>ISBN: {isbn}</p>
                {catalogo ? (
                  <>
                    <p>F. de Public: {anio_publicacion}</p>
                    <p className="mt-2">
                      <span className="cantidad">
                        {cantidad > 0 ? "Disponible" : "No Disponible"}
                      </span>
                    </p>
                  </>
                ) : null}
              </div>
              {catalogo ? (
                <div className="col-md-4 card-botones">
                  {auth ? (
                    <>
                      <Button 
                        onClick={() => handleCart(documento)} 
                        block
                        disabled={cantidad === 0}
                      >Reservar</Button>
                      <DrawerRight>
                        <DocumentoDetalle documento={documento} />
                      </DrawerRight>
                    </>

                  ) : (
                    <Link
                      to={`/catalogo/documento/${id}`}
                      target="_blank"
                      className="btn btn-primary w-100"
                    >
                      Ver Detalle
                    </Link>
                  )}
                </div>
              ) : (
                <div className="col-md-4 prestamo-data">
                  <hr className="m-0" />
                  <div className="prestamo-data__info">
                    <div className="prestamo-data__info__fecha">
                      <span>F. Préstamo: </span>
                      <span>{fecha_prestamo}</span>
                    </div>
                    <div className="prestamo-data__info__fecha">
                      <span>F. Devolución: </span>
                      <span>{fecha_devolucion}</span>
                    </div>
                  </div>
                  <span className="estado">{estado_prestamo}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.article`
  background: ${({ bgColor }) => bgColor || "rgba(255, 255, 255, 0.1)"};
  color: ${({ textColor }) => textColor || "#bdbdbd"};
  border: 1px solid #d9d9d9;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  overflow: hidden;
  h5 {
    color: ${({ textColor }) => textColor || "#ecb910"};
    font-weight: 600;
    font-size: 16px;
    margin: 0;
  }
  p {
    font-size: 14px;
  }
  .containerImg {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
      height: 100px;
    }
  }
  .containerDetail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
  span {
    font-size: 14px;
    &.cantidad {
      background: ${({ cantidad }) => (cantidad > 0 ? "#009100" : "#af2521")};
      background: transparent;
      border: 1px solid #7e7e7e3f;
      padding: 2px 7px;
      border-radius: 4px;
    }
    &.tipo {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .autores {
    & > *:not(:last-child)::after {
      content: ", ";
    }
  }
  .prestamo-data {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (min-width: 768px) {
      flex-direction: column-reverse;
      hr {
        display: none;
      }
    }
    span.estado {
      text-align: center;
      font-weight: 500;
      padding: 3px 5px;
      border-radius: 5px;
      color: ${({ estado_prestamo }) =>
        estado_prestamo === "RESERVADO" ? "#bfa800" : "#009100"};
      background: ${({ estado_prestamo }) =>
        estado_prestamo === "RESERVADO" ? "#fff3b5" : "#d9f7d8"};
    }
    &__info {
      &__fecha {
        display: flex;
        gap: 5px;
        @media screen and (min-width: 768px) {
          flex-direction: column;
        }
        & > *:first-child {
          font-weight: 500;
        }
      }
    }
  }
  .card-botones {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .ant-space-btn{
      
    }
  }
  @media screen and (min-width: 768px) {
    .card-botones {
      button {
        width: 100% !important;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .card-botones {
      button {
        width: 80% !important;
      }
    }
  }
`;
