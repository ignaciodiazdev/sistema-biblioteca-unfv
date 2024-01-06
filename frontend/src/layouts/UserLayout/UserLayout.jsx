import styled from "styled-components";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Layout, Drawer } from "antd";
import { useApp } from "../../hooks";
import {
  DropdownButton,
  Flotante,
  Logo,
  MenuList,
  ToggleThemeButton,
} from "../../components/Common";
const { Header, Sider, Content } = Layout;
import "./UserLayout.css";

import { ThemeProvider } from "styled-components";
import { Light, Dark } from "../../styles/Themes";
import { setStorageTema } from "../../api/tema";
import { BtnMenuMobile, BtnMenuDesktop, IconNotify, BtnCart } from "../../components/Layout";

export const UserLayout = ({ children }) => {
  const { theme, setTheme, auth } = useApp();
  const themeStyle = theme === "light" ? Light : Dark;
  console.log(theme);
  setStorageTema(theme);

  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  //<---------------------------->
  const isMobile = useMediaQuery({ maxWidth: 992 });
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider theme={themeStyle}>
      <Container collapsed={collapsed}>
        <Layout>
          <Header className="header">
            <div className="header__left">
              {isMobile ? (
                <BtnMenuMobile showDrawer={showDrawer}/>
              ) : (
                <div className="d-flex aligns-items-center gap-2">
                  <BtnMenuDesktop collapsed={collapsed} setCollapsed={setCollapsed}/>
                  <span style={{fontSize: "21px", paddingBottom: "6px", fontWeight: "500", color: "#fff"}}>Biblioteca UNFV</span>
                </div>
              )}
            </div>
            <div className="header__right">
              {/* <ToggleThemeButton
                theme={theme}
                toggleTheme={CambiarTheme}
              /> */}
              {
                auth?.me.is_staff ? (
                  null
                ) : (
                  <BtnCart/>
                )
              }
              {/* <IconNotify/> */}
              <Flotante/>
              <DropdownButton/>
            </div>
          </Header>
          <Drawer
            title="Menú"
            placement="left"
            closable={true}
            onClose={onClose}
            open={open}
            width={200}
            className="custom-drawer"
          >
            <MenuList theme="light" />
          </Drawer>
          <Layout className="sidebar-content">
            {isMobile ? null : (
              <Sider
                className="sidebar sider-container"
                theme={"light"}
                collapsed={collapsed}
                collapsible
                trigger={null}
              >
                <Logo collapsed={collapsed} />
                <MenuList theme="light" />
              </Sider>
            )}
            <Content className="content">{children}</Content>
          </Layout>
        </Layout>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
  overflow: hidden;
  .header {
    position: fixed;
    width: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    background: #ffffff;
    padding: 30px 0;
    padding-right: 30px !important;
    background: linear-gradient(120deg, rgb(235 86 86) 0%, rgb(255 130 60) 18%, rgb(251 92 67) 42%, rgb(239 110 101) 61%, rgb(232 88 92) 78%, rgb(223 77 97) 89%, rgb(213 57 90) 100%);
    &__right {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }

  .sidebar {
    color: #fff;
    border-right: 1px solid #e4e4e4;
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    height: 100%;
    padding-top: 70px;
    flex: ${({ collapsed }) =>
      collapsed ? "0 0 80px" : "0 0 240px !important"};
    max-width: ${({ collapsed }) => (collapsed ? "80px" : "250px !important")};
    min-width: ${({ collapsed }) => (collapsed ? "80px" : "250px !important")};
    width: ${({ collapsed }) => (collapsed ? "80px" : "250px !important")};
  }
  .content {
    min-height: 100vh;
    padding: 20px;
    padding-top: 90px;
    position: relative;
    transition: all 0.3s ease;
    @media screen and (min-width: 992px) {
      left: ${({ collapsed }) => (collapsed ? "80px" : "250px !important")};
    }
    > div {
      @media screen and (min-width: 992px) {
        width: ${({ collapsed }) => (collapsed ? "calc(100% - 80px)" : "calc(100% - 250px) !important")};
        transition: all 0.3s ease;
      }
    }
  }
  .contenidoPage {
    transition: all 0.4s ease-out;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 5px 0px 0px 0px;
    gap: 10px;
    height: 120px;
    p {
      color: #000000;
    }
  }
  .logo-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.4s ease;
  }
  .logo-icon-full {
    width: 78px !important;
    height: 78px !important;
  }
  .logo-name {
    height: 10px;
  }
  .menu-bar {
    display: flex;
    flex-direction: column;
    gap: 0px;
    font-size: 1rem;
    position: relative;
    padding: 10px;
    background: transparent;
  }
`;
