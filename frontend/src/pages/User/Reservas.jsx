import styled from "styled-components";
import { useApp, usePrestamos } from "../../hooks";
import { useEffect } from "react";
import { TableBasic } from "../../components/Common";
import { Tag } from "antd";

const columns = [
  {
    title: "#Código",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Lista de Documentos",
    key: "inventario_data",
    dataIndex: "inventario_data",
    render: (_, { inventario_data }) => (
      <>
        {inventario_data.map((doc, index) => {
          return <p key={index}>- {doc.documento_data.titulo}</p>;
        })}
      </>
    ),
  },

  {
    title: "Estado",
    dataIndex: "estado_prestamo",
    key: "estado_prestamo",
    render: (text) => {
      let color = text === "RESERVADO" ? "purple" : "green";
      if (text === "PRESTADO") {
        color = "volcano";
      }
      return (
        <Tag color={color} key={text}>
          {text.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "F. Recojo",
    dataIndex: "fecha_recojo",
    key: "fecha_recojo",
  },
  {
    title: "F. Devolución",
    dataIndex: "fecha_devolucion",
    key: "fecha_devolucion",
  },
];

export const Reservas = () => {
  const { auth } = useApp();
  const { prestamos, getPrestamosIdUser } = usePrestamos();

  useEffect(() => {
    getPrestamosIdUser(auth.me.id);
  }, []);

  const data = prestamos?.map((item, index) => ({
    ...item,
    key: index.toString(),
  }));

  return (
    <Container>
      <h1 className="mb-0">Mis Reservas</h1>
      <hr className="pb-4" />
      <TableBasic columns={columns} data={data} />
    </Container>
  );
};

const Container = styled.div``;
