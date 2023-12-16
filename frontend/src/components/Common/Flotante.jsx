import styled from "styled-components";
import { Button, Popover, ConfigProvider } from "antd";
const text = <span style={{fontSize: "18px"}}>Notificaciones</span>;
const content = (
  <div>
    <p className="py-2">Tienes un Préstamo Pendiente</p>
    <hr className="m-0" />
    <p className="py-2">
      Tu reserva fue aceptada con éxito! Que esperas para recogerla
    </p>
  </div>
);
export const Flotante = () => {
  return (
    <Container>
      <Popover
        placement="bottomRight"
        title={text}
        content={content}
        trigger={["click"]}
        overlayStyle={{width: "300px"}}
      >
        <Button>Notify</Button>
      </Popover>
    </Container>
  );
};

const Container = styled.div``;
