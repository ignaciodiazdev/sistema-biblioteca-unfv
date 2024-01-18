import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BookOutlined,
  FieldTimeOutlined,
  ProfileOutlined,
  UsergroupAddOutlined,
  AppstoreOutlined,
  ApartmentOutlined,
  AuditOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { useApp } from "../../hooks";

export const MenuList = ({ darkTheme, itemsUser }) => {
  const { logout, auth } = useApp();

  const itemsUsuario = [
    {
      key: "home",
      icon: <BookOutlined />,
      label: <Link to="/plataforma/">Inicio</Link>,
    },
    {
      key: "catalogo",
      icon: <BookOutlined />,
      label: <Link to="/plataforma/catalogo">Catalogo</Link>,
    },
    {
      key: "perfil",
      icon: <ProfileOutlined />,
      label: <Link to="/plataforma/perfil">Perfil</Link>,
    },
    {
      key: "reserva",
      icon: <FieldTimeOutlined />,
      label: <Link to="/plataforma/reservas">Reservas</Link>,
    },
    {
      key: "cerrar-sesion",
      icon: <LogoutOutlined />,
      label: (
        <Link onClick={logout} to={"/login"}>
          Cerrar Sesión
        </Link>
      ),
    },
  ];
  const itemsAdmin = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/admin/dashboard">Inicio</Link>,
    },
    {
      key: "perfil",
      icon: <UserOutlined />,
      label: <Link to="/admin/perfil">Perfil</Link>,
    },
    {
      key: "biblioteca",
      icon: <AppstoreOutlined />,
      label: "Biblioteca",
      children: [
        {
          key: "documentos",
          label: <Link to="/admin/documentos">Documentos</Link>,
          icon: <BookOutlined />,
        },
        {
          key: "autores",
          label: <Link to="/admin/autores">Autores</Link>,
          icon: <UsergroupAddOutlined />,
        },
        {
          key: "categorias",
          icon: <ApartmentOutlined />,
          label: <Link to="/admin/categorias">Categorías</Link>,
        },
        {
          key: "editoriales",
          icon: <AuditOutlined />,
          label: <Link to="/admin/editoriales">Editoriales</Link>,
        },
      ],
    },
    {
      key: "prestamos",
      icon: <CarryOutOutlined />,
      label: <Link to="/admin/prestamos">Préstamos</Link>,
    },
    {
      key: "reservas",
      icon: <SettingOutlined />,
      label: <Link to="/admin/reservas">Reservas</Link>,
    },
    {
      key: "usuarios",
      icon: <UserOutlined />,
      label: <Link to="/admin/usuarios">Usuarios</Link>,
    },
    {
      key: "cerrar-sesion",
      icon: <LogoutOutlined />,
      label: (
        <Link onClick={logout} to={"/login"}>
          Cerrar Sesión
        </Link>
      ),
    },
  ];

  return (
    <Menu
      theme={"dark"}
      mode="inline"
      className="menu-bar"
      style= {{fontSize: "14px"}}
      items={auth.me.is_staff === true ? itemsAdmin : itemsUsuario}
      defaultSelectedKeys={"home"}
    ></Menu>
  );
};
