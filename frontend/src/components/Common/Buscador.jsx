import styled from "styled-components";

export const Buscador = ({
  searchType,
  setSearchType,
  search,
  setSearch,
  handleClickSearch,
  documentType
}) => {
  return (
    <Container>
      <div className="group-search text-center">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="">Todos los documentos</option>
          {documentType?.map((type) => (
            <option key={type.id} value={type.id}>
              {type.tipo}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Ingrese palabras o frase de búsqueda"
          className=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="boton btn-primary" onClick={() => handleClickSearch()}>
          Buscar
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .group-search {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 10px;
  }
  @media screen and (min-width: 768px) {
    .group-search {
      flex-direction: row;
      gap: 0;
    }
    select {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    input {
      width: 350px;
    }
    button {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  .group-search {
    select {
      background: #ff7300;
      color: #fff;
      height: 45px;
      border: none;
      padding: 0px 10px;
      overflow: hidden !important;
      &:focus {
        outline: none;
      }
      option {
        background: #fff;
        color: #191919;
      }
    }
    input {
      height: 45px;
      /* width: 350px; */
      border: none;
      padding-left: 20px;
      &:focus {
        outline: none;
      }
    }
    button {
      height: 45px;
      border: none;
      padding: 0 15px;
      background: #9a9999;
      color: #fff;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #737373;
      }
    }
  }

`;
