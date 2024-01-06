import { UserLayout } from "../layouts";
import { Catalogo, Perfil, Prestamos, Reservas, Checkout } from '../pages/User'
import { Catalogo2 } from "../pages/User/Catalogo2";

const routesUser = [
  {
    path: "/plataforma",
    layout: UserLayout,
    page: Catalogo2,
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
    page: Catalogo,
  },
  {
    path: "/plataforma/checkout",
    layout: UserLayout,
    page: Checkout,
  },
];

export default routesUser;
