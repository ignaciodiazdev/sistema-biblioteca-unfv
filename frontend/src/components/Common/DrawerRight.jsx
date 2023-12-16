import styled from "styled-components";
import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";

export const DrawerRight = ({ children }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <Space> */}
        <Button type="primary" block onClick={showDrawer}>
          Ver Detalle
        </Button>
      {/* </Space> */}
      <Drawer
        title="Detalle del Documento"
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="p-3">
          {children}
        </div>
      </Drawer>
    </>
  );
};

const Container = styled.div``;
