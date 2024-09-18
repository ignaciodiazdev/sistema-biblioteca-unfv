import { ClientLayout } from "../layouts";
import { Inicio, Catalogo, DocumentoDetalle } from "../pages/Client";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    page: Inicio,
  },
  {
    path: "/catalogo",
    layout: ClientLayout,
    page: Catalogo,
  },
  {
    path: "/catalogo/documento/:id",
    layout: ClientLayout,
    page: DocumentoDetalle,
  },
];

export default routesClient;
