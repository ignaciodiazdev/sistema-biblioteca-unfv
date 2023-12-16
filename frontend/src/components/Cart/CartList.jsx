import styled from "styled-components";
import { useApp } from "../../hooks";
import { Button, Image } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import {Link} from 'react-router-dom'

export const CartList = ({ onClose, buttonsCart }) => {
  const { cart, removeToCart } = useApp();

  return (
    <Container>
      <div className="carrito">
        {cart.length !== 0 ? (
          <>
            <div className="carrito__body">
              {cart.map((item, index) => (
                <div className="item" key={index}>
                  <div className="item__img">
                    <Image src={item.imagen} alt={item.titulo} />
                  </div>
                  <div className="item__info">
                    <h2>{item.titulo}</h2>
                    <p>Tipo: {item.tipo_data.tipo}</p>
                    <p>
                      Autor:{" "}
                      {item.autores_data.map((autor) => autor.nombre + ". ")}
                    </p>
                    <p>ISBN: {item.isbn}</p>
                    <Button
                      type="dashed"
                      className="mt-2 d-flex align-items-center"
                      size="small"
                      onClick={() => removeToCart(item)}
                    >
                      <DeleteFilled/>Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {buttonsCart === false ? null : (
              <div className="carrito__botones">
                <Button type="dashed" size="large" block onClick={onClose}>
                  Seguir Reservando
                </Button>
                <Link to={"/plataforma/checkout"}>
                  <Button type="primary" size="large" block onClick={onClose}>
                    Finalizar Reserva
                  </Button>
                </Link>
              </div>
            )}
            {/* <div className="carrito__botones">
              <Button type="dashed" size="large" block onClick={onClose}>
                Seguir Reservando
              </Button>
              <Button type="primary" size="large" block>
                Finalizar Reserva
              </Button>
            </div> */}
          </>
        ) : (
          <div className="carrito__vacio">
            <p>No hay documentos en el carrito 🤓</p>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .carrito {
    padding: 10px 0;
    &__vacio {
      text-align: center;
      padding: 6rem 0;
      p {
        font-size: 1.2rem;
        font-weight: 600;
        color: #7a7a7a;
      }
    }
    &__botones {
      margin-top: 1rem;
      button {
        margin-bottom: 1rem;
      }
    }
    &__body > *:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
    .item {
      display: grid;
      grid-template-columns: 1fr 4fr;
      gap: 0.1rem;
      padding: 10px 0;
      .item__img {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .item__info {
        padding-left: 1rem;
        h2 {
          font-size: 1rem;
          font-weight: 700;
        }
        p {
          font-size: 0.9rem;
          font-weight: 400;
        }
      }
    }
  }

`;
