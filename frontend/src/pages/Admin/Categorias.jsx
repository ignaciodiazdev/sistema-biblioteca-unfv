import styled from "styled-components";
import {HeaderPage, TopMenu} from '../../components/Admin'
import { Table } from "../../components/Common";

export const Categorias = () => {
  const data = [
    {
      codigo: "D001",
      categoria: "Libro",
    },
    {
      codigo: "D002",
      categoria: "Revista",
    },
    {
      codigo: "D003",
      categoria: "Artículo",
    },
    // Puedes agregar más objetos según sea necesario
  ];
  const columnas = [
    { label: "Codigo", field: "codigo", width: "0" },
    { label: "Categoría de Documento", field: "categoria", width: "1.5" },
    { buttons: [
      { label: 'Editar', color: 'warning' },
      { label: 'Eliminar', color: 'danger' },
      ],
      width: '2',
    },
  ];  
  return (
    <Container>
      <TopMenu nameSection="Categorias"/>
      <main className="page-content">
        <HeaderPage btnTitle="Nueva Categoría" />
        <div className="">
          <Table columnas={columnas} data={data} />
        </div>
      </main>
    </Container>
  )
}

const Container = styled.div`
  .page-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;