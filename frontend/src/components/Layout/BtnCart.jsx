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

const Container = styled.div`
  .ant-btn{
    background: transparent;
    margin-top: 10px;
    font-size: 26px;
    outline: none;
    border: none;
    box-shadow: none;
    svg{
      color: #fff;
      transition: all 0.3s ease-in-out;
    }
  }
  .ant-btn:hover{
    background: transparent !important;
    border: none  !important;
    svg{
      scale: 1.2;
    }
  }
`;
