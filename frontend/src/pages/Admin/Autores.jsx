import styled from "styled-components";
import {HeaderPage, TopMenu} from '../../components/Admin'
import { Table } from "../../components/Common";

export const Autores = () => {

  const data = [
    {
      codigo: "U001",
      nombres: "Juan",
      apellidos: "Pérez",
    },
    {
      codigo: "U002",
      nombres: "María",
      apellidos: "Gómez",
    },
    {
      codigo: "U003",
      nombres: "Carlos",
      apellidos: "López",
    },
    {
      codigo: "U004",
      nombres: "Laura",
      apellidos: "Fernández",
    },
    {
      codigo: "U005",
      nombres: "Pedro",
      apellidos: "Martínez",
    },
    // Puedes agregar más objetos según sea necesario
  ];

  const columnas = [
    { label: "Codigo", field: "codigo", width: "0" },
    { label: "Nombres", field: "nombres", width: "1.5" },
    { label: "Apellidos", field: "apellidos", width: "1.5" },
    { buttons: [
      { label: 'Editar', color: 'warning' },
      { label: 'Eliminar', color: 'danger' },
      ],
      width: '2',
    },
  ];  
  return (
    <Container>
      <TopMenu nameSection="Autores"/>
      <main className="page-content">
        <HeaderPage btnTitle="Nuevo Autor" />
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