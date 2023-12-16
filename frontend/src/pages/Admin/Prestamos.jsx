import styled from "styled-components";
import {HeaderPage, TopMenu} from '../../components/Admin'
import { Table } from "../../components/Common";

export const Prestamos = () => {
  const data = [
    {
      codigo: "B456",
      nombres: "María",
      apellidos: "Gómez",
      libro: "Cien años de soledad",
      recojo: "2023-11-03",
      devolucion: "2023-11-18",
      estado: "Devuelto",
    },
    {
      codigo: "C789",
      nombres: "Carlos",
      apellidos: "López",
      libro: "El Señor de los Anillos",
      recojo: "2023-11-05",
      devolucion: "2023-11-20",
      estado: "Pendiente",
    },
    {
      codigo: "D987",
      nombres: "Laura",
      apellidos: "Fernández",
      libro: "1984",
      recojo: "2023-11-07",
      devolucion: "2023-11-22",
      estado: "Devuelto",
    },
    {
      codigo: "E654",
      nombres: "Pedro",
      apellidos: "Martínez",
      libro: "Don Quijote de la Mancha",
      recojo: "2023-11-09",
      devolucion: "2023-11-24",
      estado: "Pendiente",
    },
    {
      codigo: "F321",
      nombres: "Ana",
      apellidos: "Sánchez",
      libro: "Orgullo y prejuicio",
      recojo: "2023-11-11",
      devolucion: "2023-11-26",
      estado: "Devuelto",
    },
    // Puedes agregar más objetos según sea necesario
  ];
  
  const columnas = [
    { label: "Codigo", field: "codigo", width: "0" },
    { label: "Nombres", field: "nombres", width: "1.5" },
    { label: "Apellidos", field: "apellidos", width: "1.5" },
    { label: "Libro", field: "libro", width: "1.5" },
    { label: "F. Recojo", field: "recojo", width: "1.5" },
    { label: "F. Devolucion", field: "devolucion", width: "1.5" },
    { label: "Estado Devolucion", field: "estado", width: "1.5" },
    { buttons: [
      { label: 'Editar', color: 'warning' },
      { label: 'Eliminar', color: 'danger' },
      ],
      width: '2',
    },
  ];  
  return (
    <Container>
      <TopMenu nameSection="Préstamos"/>
      <main className="page-content">
        <HeaderPage btnTitle="Nuevo Préstamo" />
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