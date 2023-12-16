import styled from "styled-components";
import { TopMenu } from "../../components/Admin";
import { Table } from "../../components/Common";
import { HeaderPage } from "../../components/Admin";

export const Usuarios = () => {
  const data = [
    {
      codigo: "2019230747",
      nombres: "Marcos Alberto",
      apellidos: "Hernandez",
      usuario: "Marcosdz",
      dni: "77482822",
      tipo: "Alumno",
    },
    {
      codigo: "2020123456",
      nombres: "Ana",
      apellidos: "González",
      usuario: "AnaG",
      dni: "555123456",
      tipo: "Profesor",
    },
    {
      codigo: "2021345678",
      nombres: "Javier",
      apellidos: "Ramírez",
      usuario: "JaviR",
      dni: "555987654",
      tipo: "Administrador",
    },
    {
      codigo: "2022456789",
      nombres: "Laura",
      apellidos: "Fernández",
      usuario: "LauraF",
      dni: "555555555",
      tipo: "Estudiante",
    },
    {
      codigo: "2023567890",
      nombres: "Pablo",
      apellidos: "Rivera",
      usuario: "PabloR",
      dni: "555666777",
      tipo: "Investigador",
    },
  ];

  const columnas = [
    { label: "Código Institucional", field: "codigo", width: "2" },
    { label: "Nombres", field: "nombres", width: "1.5" },
    { label: "Apellidos", field: "apellidos", width: "1.5" },
    { label: "Usuario", field: "usuario", width: "1.5" },
    { label: "DNI", field: "dni", width: "1.5" },
    { label: "Tipo", field: "tipo", width: "1.5" },
    { buttons: [
      { label: 'Editar', color: 'warning' },
      { label: 'Eliminar', color: 'danger' },
      ],
      width: '2',
    },
  ];

  return (
    <Container>
      <TopMenu nameSection="Usuarios" />
      <main className="page-content">
        <HeaderPage btnTitle="Nuevo Usuario" />
        <div className="">
          <Table columnas={columnas} data={data} />
        </div>
      </main>
    </Container>
  );
};

const Container = styled.div`
  .page-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;
