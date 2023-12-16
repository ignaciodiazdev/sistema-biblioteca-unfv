import { AdminLayout } from "../layouts";
import {UserLayout} from '../layouts'
import {
  Autores,
  Categorias,
  Dashboard,
  Documentos,
  Editoriales,
  Prestamos,
  Reservas,
  Usuarios,
} from "../pages/Admin";
import {Perfil} from '../pages/User'


const routesAdmin = [
  {
    path: "/admin/dashboard",
    layout: UserLayout,
    page: Dashboard,
  },
  {
    path: "/admin/autores",
    layout: UserLayout,
    page: Autores,
  },
  {
    path: "/admin/categorias",
    layout: UserLayout,
    page: Categorias,
  },
  {
    path: "/admin/documentos",
    layout: UserLayout,
    page: Documentos,
  },
  {
    path: "/admin/editoriales",
    layout: UserLayout,
    page: Editoriales,
  },
  {
    path: "/admin/prestamos",
    layout: UserLayout,
    page: Prestamos,
  },
  {
    path: "/admin/reservas",
    layout: UserLayout,
    page: Reservas,
  },
  {
    path: "/admin/usuarios",
    layout: UserLayout,
    page: Usuarios,
  },
  {
    path: "/admin/perfil",
    layout: UserLayout,
    page: Perfil,
  }
]

export default routesAdmin;