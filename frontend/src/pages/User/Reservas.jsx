import styled from "styled-components";
import { useApp, usePrestamos } from "../../hooks";
import { useEffect } from "react";
import { DocumentoCard, DocumentosList } from "../../components/User";

import { TableBasic, DrawerRight, DocumentoDetalle } from "../../components/Common";
import { Tag } from 'antd';

const columns = [
  {
    title: '#Código',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Lista de Documentos',
    key: 'inventario_data',
    dataIndex: 'inventario_data',
    render: (_, { inventario_data }) => (
      <>
        {inventario_data.map((doc, index) => {
          return (
            <p key={index}>
              - {doc.documento_data.titulo}
            </p>
          );
        })}
      </>
    ),
  },

  {
    title: 'Estado',
    dataIndex: 'estado_prestamo',
    key: 'estado_prestamo',
    render: (text) => {
      let color = text === 'RESERVADO' ? 'purple' : 'green';
      if (text === 'PRESTADO') {
        color = 'volcano';
      }
      return (
        <Tag color={color} key={text}>
          {text.toUpperCase()}
        </Tag>
      );
    }
  },
  {
    title: 'F. Recojo',
    dataIndex: 'fecha_recojo',
    key: 'fecha_recojo',
  },
  {
    title: 'F. Devolución',
    dataIndex: 'fecha_devolucion',
    key: 'fecha_devolucion',
  },
]

export const Reservas = () => {
  const { auth } = useApp();
  const { prestamos, getPrestamosIdUser } = usePrestamos();

  useEffect(() => {
    getPrestamosIdUser(auth.me.id);
  }, []);

  // let prestamosFiltrados = prestamos?.filter(
  //   (prestamo) => prestamo.estado_prestamo === "RESERVADO"
  // );
  console.log(prestamos);
  const data = prestamos?.map((item, index) => ({ ...item, key: index.toString() }));
  console.log(data);

  return (
    <Container>
      <h1 className="mb-0">Mis Reservas</h1>
      <hr className="pb-4" />
      <section className="lista-reservas">
        {/* {prestamosFiltrados?.length === 0 ? (
          <div className="lista-reservas__notfound">
            <h4>No tienes reservas realizadas...</h4>
          </div>
        ) : null} */}
        {/* {prestamosFiltrados?.map((prestamo) => (
          // Reemplazar el componente DocumentosList por un componente nuevo que se llame DocumentosTable que tenga la misma funcionalidad pero que muestre los documentos en una tabla (usar el componente Table de antd) y que tenga solo las coumnas de codigo del Prestamo, Estado del Prestamo, Fecha de Prestamo, Fecha de Devolucion, y los documentos que se han reservado se deberian de ver a detalle en un DrawerRight (usar el componente Drawer de antd) y que tenga la misma funcionalidad que el componente DocumentoDetalle (que se encuentra en frontend/src/components/User/DocumentoDetalle.jsx) 
          <DocumentosList
            key={prestamo.id}
            documentosFiltrados={prestamo.inventario_data}
            catalogo={false}
            bgColor={"white"}
            textColor={"#0d0d0d"}
          />
        ))} */}
      </section>
      <TableBasic columns={columns} data={data} />

    </Container>
  );
};

const Container = styled.div`
  h1 {
    /* margin: 1rem 0; */
  }
  /* .lista-reservas {
    @media screen and (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    &__notfound {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 500px;
    }
  } */
  h1 {
    /* margin: 1rem 0; */
  }
  .lista-reservas {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    @media screen and (min-width: 1250px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    &__notfound {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 500px;
    }
  }
`;
