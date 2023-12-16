import styled from "styled-components";
import { useApp } from "../../hooks";
// import { Light, Dark } from "../../styles/Themes";
// import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Sidebar } from "../../components/Admin";
import { LoginForm } from "../../components/Common";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
// import { setStorageTema } from "../../api/tema"

export const AdminLayout = ({ children }) => {
  const { theme, auth } = useApp();

  // const themeStyle = theme === "light" ? Light : Dark;//Para cambiar el tema
  // setStorageTema(theme)//Para guardar el tema en el localstorage
  // console.log(theme)
  // Para modificar el estado del sidebar (Open o Close)
  const [sidebarOpen, setSidebarOpen] = useState(true);

  console.log({ auth });
 
  return (
    // <ThemeProvider theme={themeStyle}>
      <Container className={sidebarOpen ? "sidebarState active" : ""}>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          className="sd"
        />
        {children}
      </Container>
    /* </ThemeProvider> */
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${(props) => props.theme.bgtotal};
  transition: all 0.4s;
  font-family: "Raleway", sans-serif !important;
  &.active {
    grid-template-columns: 250px auto;
  }
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
  }
  .contenido {
    display: flex;
    flex-direction: column;
  }
`;
