export const filtrarDocumentos = (documentosData, tipoSeleccionado, titulo, autor, anio, idioma, isbn, codigoBarras) => {
  return documentosData.filter((documento) => {
    const { tipo_data, titulo: documentoTitulo, autores_data, anio_publicacion, idioma_data, isbn: documentoISBN, cod_barras: documentoCodigoBarras } = documento.documento_data;

    const tipoValido = tipoSeleccionado === '' || tipo_data.tipo === tipoSeleccionado;
    const tituloValido = titulo === '' || documentoTitulo.toLowerCase().includes(titulo.toLowerCase());
    const autorValido = autor === '' || autores_data.some(autorData =>
      `${autorData.nombre} ${autorData.apellidos}`.toLowerCase().includes(autor.toLowerCase())
    );
    const anioValido = anio === '' || anio_publicacion.includes(anio);
    const idiomaValido = idioma === '' || idioma_data.idioma.toLowerCase().includes(idioma.toLowerCase());
    const isbnValido = isbn === '' || documentoISBN.includes(isbn);
    const codigoBarrasValido = codigoBarras === '' || documentoCodigoBarras.includes(codigoBarras);

    return tipoValido && tituloValido && autorValido && anioValido && idiomaValido && isbnValido && codigoBarrasValido;
  });
};