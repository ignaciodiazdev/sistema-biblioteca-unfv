import styled from "styled-components";
import {HeaderPage, TopMenu} from '../../components/Admin'
import { Table } from "../../components/Common";

export const Editoriales = () => {
  const data = [
    {
      codigo: "E001",
      editorial: "Panamericana",
    },
    {
      codigo: "E002",
      editorial: "MC Graw Hill",
    },
    {
      codigo: "E003",
      editorial: "Corefo",
    },
    {
      codigo: "E004",
      editorial: "Lassiana",
    },
    {
      codigo: "E005",
      editorial: "Villacosta",
    },
    // Puedes agregar más objetos según sea necesario
  ];
  const columnas = [
    { label: "Codigo", field: "codigo", width: "0" },
    { label: "Nombre de Editorial", field: "editorial", width: "1.5" },
    { buttons: [
      { label: 'Editar', color: 'warning' },
      { label: 'Eliminar', color: 'danger' },
      ],
      width: '2',
    },
  ];  

  return (
    <Container>
      <TopMenu nameSection="Editoriales"/>
      <main className="page-content">
        <HeaderPage btnTitle="Nueva Editorial" />
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