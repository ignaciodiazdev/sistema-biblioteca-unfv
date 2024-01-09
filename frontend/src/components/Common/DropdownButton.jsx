import styled from "styled-components";
import {
  UserOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { useApp } from "../../hooks";
import { useMediaQuery } from "react-responsive";
import iconUsuario from "../../assets/login/icon-usuario.png";

export const DropdownButton = () => {
  const { logout, auth } = useApp();
  const {first_name, last_name, image, tipo_usuario} = auth.me;
  const items = [
    {
      label: "Carrito",
      icon: <ShoppingCartOutlined />,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <Link to={"/plataforma/perfil"}>Perfil</Link>,
      icon: <UserOutlined />,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link onClick={logout} to={"/login"}>
          Cerrar Sesión
        </Link>
      ),
      icon: <LogoutOutlined />,
      key: "2",
    },
  ];
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return (
    <Container>
      <Dropdown
        // overlayClassName="dropdown"
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space className="mainButton">
            {image ? (
              <img src={`${image}`} alt="avatar" />
            ) : (
              <img src={iconUsuario} alt="avatar" />
            )}
            {isMobile ? null : (
              <div>
                <span>{`${first_name} ${last_name}`}</span>
              </div>
            )}
            <CaretDownOutlined />
          </Space>
        </a>
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`

  .mainButton {
    font-size: 14px;
    color: #FFF;
    span {
      font-weight: 400;
    }
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .ant-dropdown-menu {
    /* inset: 64.8px 20px auto auto !important; */
  }
`;
