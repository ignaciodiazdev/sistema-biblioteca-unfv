import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/Common";
import { useApp } from "../../hooks";
import loginSVG from "../../assets/login/buho.png";
import loginWallp from "../../assets/login/unfv.jpg";
import loginFB from "../../assets/login/facebook.png";
import loginIG from "../../assets/login/instagram.webp";
import loginWeb from "../../assets/login/web.png";

export const Login = () => {
  const { auth } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.me.is_staff) {
      navigate("/admin/dashboard");
    } else if (auth?.me.is_staff === false) {
      navigate("/plataforma");
    }
  }, [auth]);

  if (auth) return null;

  return (
    <Container>
      <div className="login">
        <div className="login__content">
          <div className="login__content__img">
            <img src={loginSVG} alt="logo" />
          </div>
          <h1>Biblioteca Virtual UNFV 👋</h1>
          <p className="nota">Ingresa tus datos de usuario y contraseña.</p>
          <div className="login__content__datos">
            {!auth ? <LoginForm /> : null}
          </div>
          <div className="login__content__registrarse">
            <p>
              ¿Cómo usar la Plataforma?{" "}
              <a
                href="https://drive.google.com/file/d/1cT1b76aTujjDJ6TP14-HnASMljigdotO/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Ver Manual
              </a>
            </p>
          </div>
          <div className="line-with-text">
            <hr />
            <span className="centered-text">Redes Sociales</span>
            <hr />
          </div>
          <div className="login__content__redes">
            <a
              href="https://www.facebook.com/profile.php?id=100070361494696"
              target="_blank"
            >
              <img src={loginFB} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/unfvoficial/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={loginIG} alt="instagram" />
            </a>
            <a href="https://www.unfv.edu.pe/" target="_blank" rel="noreferrer">
              <img src={loginWeb} alt="web" />
            </a>
          </div>
        </div>
        <div className="login__wallpaper">
          <img src={loginWallp} alt="wallpaper" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(to bottom right, #849ff7, #f3d5a9);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 50px;

  .login {
    height: 90%;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    h1 {
      font-weight: 600;
      font-size: 22px;
      font-family: "Poppins", sans-serif !important;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row-reverse;
    }
  }

  .login__content {
    flex: 3;
    padding: 30px;
    background-color: #4942ce;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .nota {
      color: #e0e0e0;
      font-size: 14px;
    }
    @media screen and (min-width: 1024px) {
      max-width: 550px;
    }
    @media screen and (min-width: 552px) {
      padding: 70px;
    }
  }
  .login__content__registrarse {
    text-align: center;
    font-size: 15px;
    a {
      color: #ffb829;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  .login__content__redes {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      transition: all 0.3s ease;
    }
    img:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.845);
    }
  }
  .login__content__img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      text-align: center;
      height: 80px;
    }
  }
  .login__wallpaper {
    flex: 6;
    background-size: cover;
    background-position: center;
    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
  .login__wallpaper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .line-with-text {
    display: flex;
    align-items: center;
    width: 100%;
    margin: auto;
  }

  hr {
    flex-grow: 1;
    border: none;
    height: 1px;
    background-color: #ccc;
  }

  .centered-text {
    padding: 0 10px;
    color: #ffffff88;
    font-size: 12px;
  }
`;
