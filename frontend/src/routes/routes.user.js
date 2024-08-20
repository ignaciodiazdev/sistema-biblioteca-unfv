import { UserLayout } from "../layouts";
import {
  Inicio,
  Catalogo2,
  Perfil,
  Prestamos,
  Reservas,
  Checkout,
} from "../pages/User";

const routesUser = [
  {
    path: "/plataforma",
    layout: UserLayout,
    page: Inicio,
  },
  {
    path: "/plataforma/perfil",
    layout: UserLayout,
    page: Perfil,
  },
  {
    path: "/plataforma/prestamos",
    layout: UserLayout,
    page: Prestamos,
  },
  {
    path: "/plataforma/reservas",
    layout: UserLayout,
    page: Reservas,
  },
  {
    path: "/plataforma/catalogo",
    layout: UserLayout,
    page: Catalogo2,
  },
  {
    path: "/plataforma/checkout",
    layout: UserLayout,
    page: Checkout,
  },
];

export default routesUser;
