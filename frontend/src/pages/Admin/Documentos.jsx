import styled from "styled-components";
import {HeaderPage, TopMenu} from '../../components/Admin'
import { Table } from "../../components/Common";

export const Documentos = () => {
  const data = [
    {
      codigo: "L001",
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      editorial: "Editorial Sudamericana",
      descripcion: "Una novela mágica que narra la historia de la familia Buendía.",
      ejemplares: 50,
    },
    {
      codigo: "L002",
      titulo: "El Señor de los Anillos",
      autor: "J.R.R. Tolkien",
      editorial: "Minotauro",
      descripcion: "La épica historia de Frodo Bolsón y el Anillo Único.",
      ejemplares: 30,
    },
    {
      codigo: "L003",
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      editorial: "Penguin Classics",
      descripcion: "Una novela de amor y clases sociales en la Inglaterra del siglo XIX.",
      ejemplares: 40,
    },
    {
      codigo: "L004",
      titulo: "1984",
      autor: "George Orwell",
      editorial: "Debolsillo",
      descripcion: "Una distopía que reflexiona sobre el control totalitario del Estado.",
      ejemplares: 25,
    },
    {
      codigo: "L005",
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      editorial: "Real Academia Española",
      descripcion: "La obra cumbre de la literatura española.",
      ejemplares: 35,
    },
    // Puedes agregar más objetos según sea necesario
  ];
  const columnas = [
    { label: "Codigo", field: "codigo", width: "0" },
    { label: "Título", field: "titulo", width: "1.5" },
    { label: "Autor", field: "autor", width: "1.5" },
    { label: "Editorial", field: "editorial", width: "1.5" },
    { label: "Descripcion", field: "descripcion", width: "1.5" },
    { label: "Cant.", field: "ejemplares", width: "0" },
    { buttons: [
      { label: 'Editar', color: 'warning' },
      { label: 'Eliminar', color: 'danger' },
      ],
      width: '2',
    },
  ];  
  return (
    <Container>
      <TopMenu nameSection="Documentos"/>
      <main className="page-content">
        <HeaderPage btnTitle="Nuevo Documento" />
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