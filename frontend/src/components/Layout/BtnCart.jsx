import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { ModalBasic, Pasos } from "../Common";
import { CartList } from "../Cart";

export const BtnCart = () => {
  return (
    <Container>
      <ModalBasic
        title={"Carrito de Documentos"}
        icon={<FaShoppingCart />}
        children={<CartList/>}
        buttons={null}
      />
    </Container>
  );
};

const Container = styled.div``;
