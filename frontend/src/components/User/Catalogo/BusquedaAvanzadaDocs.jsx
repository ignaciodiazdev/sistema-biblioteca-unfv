import styled from "styled-components";
import React, { useState } from "react";
import { filtrarDocumentos } from "../../../utils/filtroAvanzado";

export const BusquedaAvanzadaDocs = ({
  autor,
  setAutor,
  anio,
  setAnio,
  idioma,
  setIdioma,
  isbn,
  setIsbn,
  codigoBarras,
  setCodigoBarras,
}) => {
  return (
    <Container>
      <div className="group-input-search">
        <label>Autor:</label>
        <input
          type="text"
          className="px-2 buscador"
          placeholder="Buscar por autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>
      <div className="group-input-search">
        <label>Año:</label>
        <input
          type="text"
          className="px-2 buscador"
          placeholder="Buscar por año"
          value={anio}
          onChange={(e) => setAnio(e.target.value)}
        />
      </div>
      <div className="group-input-search">
        <label>Idioma:</label>
        <select
          className="px-2 buscador"
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
        >
          <option value="">Todos los idiomas</option>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Francés">Francés</option>
          <option value="Quechua">Quechua</option>
          <option value="Italiano">Italiano</option>
        </select>
      </div>
      <div className="group-input-search">
        <label>ISBN:</label>
        <input
          type="text"
          className="px-2 buscador"
          placeholder="Buscar por ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </div>
      <div className="group-input-search">
        <label>Cód. Barras:</label>
        <input
          type="text"
          className="px-2 buscador"
          placeholder="Buscar por código de barras"
          value={codigoBarras}
          onChange={(e) => setCodigoBarras(e.target.value)}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  padding-bottom: 10px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 15px;
`;
