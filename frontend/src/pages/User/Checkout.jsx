import styled from "styled-components";
import { CheckoutForm } from "../../components/Checkout";
import { useApp } from "../../hooks";
import { CartList } from "../../components/Cart";

export const Checkout = () => {
  const { cart } = useApp();
  return (
    <Container>
      <h1>Checkout</h1>
      <hr className="m-0 mb-4" />
      <div className="checkout">
        <div className="checkout__resumen">
          <h5>Resumen de Reserva</h5>
          <CartList buttonsCart={false} />
        </div>
        <div className="checkout__form">
          <CheckoutForm />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .checkout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media screen and (min-width: 1200px) {
      display: grid;
      grid-template-columns: 4fr 2fr;
    }
    &__resumen {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 1rem;
      border-radius: 5px;
      @media screen and (min-width: 1200px) {
        // Estas clases estan definidas en el CartList, puedo reutilizarlas
        .carrito__body{
          display: grid;
          grid-template-columns: 1fr;
          .item__info > *:not(:first-child){
            margin-top: 12px; 
          }
        }
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 1rem;
      border-radius: 5px;
      @media screen and (min-width: 1200px){
        height: 270px;
      }
    }
  }
`;
