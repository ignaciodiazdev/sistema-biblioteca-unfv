
export const getFilterBasicDocument = (inventario, type, tituloIngresado) => {
  const filter = inventario?.filter(({documento_data}) => {
    const tituloMinuscula = documento_data.titulo.toLowerCase();
    const tituloIngresadoMinuscula = tituloIngresado.toLowerCase();
    return documento_data.tipo === type && tituloMinuscula.includes(tituloIngresadoMinuscula);
  });
  return filter;
}