import styled from "styled-components";
import { Button, Image } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import iconLibro from "../../assets/Client/libro-default.svg";

export const CartDetail = ({
  imagen,
  titulo,
  tipo_data,
  autores_data,
  isbn,
  item,
  removeToCart
}) => {
  return (
    <Container>
      <div className="item">
        <div className="item__img">
          {
            imagen ? <Image src={imagen} alt={titulo} /> : <img src={iconLibro} alt={titulo}/>
          }
        </div>
        <div className="item__info">
          <h2>{titulo}</h2>
          <p>Tipo: {tipo_data.tipo}</p>
          <p>
            Autor:{" "}
            {autores_data.map(
              (autor) => autor.nombre + ". "
            )}
          </p>
          <p>ISBN: {isbn}</p>
          <Button
            type="dashed"
            className="mt-2 d-flex align-items-center"
            size="small"
            onClick={() => removeToCart(item)}
          >
            <DeleteFilled />
            Eliminar
          </Button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div``;
