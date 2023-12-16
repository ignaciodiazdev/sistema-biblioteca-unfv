import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { ModalBasic, LoginForm } from "../../components/Common";
import { useApp } from "../../hooks";
import iconUsuario from "../../assets/login/icon-usuario.png";

export const Navigation = () => {
  let location = useLocation();

  const { auth, logout } = useApp();
  console.log({ auth, logout });

  return (
    <Container>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark  dark fixed-top">
          <div className="container">
            {/* <!-- icono --> */}
            <Link to={"/"} className="navbar-brand navbar-left">
              <i className="bi bi-flower1"></i>
              <span className="marca">
                <span className="marca-second">Biblioteca UNFV</span>
              </span>
            </Link>

            {/* <!-- boton del menu --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <i className="bx bx-menu"></i>
            </button>

            {/* <!-- elementos del menu colapsable --> */}
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className={`nav-link px-md-3 ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/catalogo"}
                    className={`nav-link px-md-3 ${
                      location.pathname === "/catalogo" ? "active" : ""
                    }`}
                  >
                    Catálogo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/nosotros"}
                    className={`nav-link px-md-3 ${
                      location.pathname === "/nosotros" ? "active" : ""
                    }`}
                  >
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/servicios"}
                    className={`nav-link px-md-3 ${
                      location.pathname === "/servicios" ? "active" : ""
                    }`}
                  >
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  {/* {auth ? (
                    <div className="dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href=""
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={iconUsuario} alt="icono de usuario" />
                        <span>{auth.me.first_name}</span>
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to={"/perfil"}>
                            Mi perfil
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/reservas"}>
                            Mis Reservas
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={"/prestamos"}>
                            Mis Préstamos
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" onClick={logout} to={"/"}>
                            Cerrar Sesión
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link
                      // type="button"
                      className="nav-link px-md-3"
                      // data-bs-toggle="modal"
                      // data-bs-target="#exampleModal"
                      to={"/login"}
                    >
                      Plataforma
                    </Link>
                  )} */}
                  <Link
                    // type="button"
                    className="nav-link px-md-3"
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal"
                    to={"/login"}
                  >
                    Plataforma
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <ModalBasic>
        <LoginForm />
      </ModalBasic>
    </Container>
  );
};

const Container = styled.div`
  nav {
    height: 60px;
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.1);
    .marca-second {
      font-weight: bold;
    }
    background-image: linear-gradient(
      to right top,
      #ff8300,
      #ff7c00,
      #ff7500,
      #ff6e00,
      #ff6600
    );
    a {
      color: #fff;
      &.nav-item > .active {
        /* color: #ffffff !important; */
      }
      &.dropdown-item {
        color: #000 !important;
      }
      img {
        width: 25px;
        height: 25px;
        margin-right: 7px;
        vertical-align: middle;
      }
    }
    .dropdown-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dropdown-menu {
      border: none;
      background: #f4f4f4f9;
      border-radius: 3px;
      margin-bottom: 10px;
    }
    .container {
      background-image: linear-gradient(
        to right top,
        #ff8300,
        #ff7c00,
        #ff7500,
        #ff6e00,
        #ff6600
      );
    }
  }
`;
