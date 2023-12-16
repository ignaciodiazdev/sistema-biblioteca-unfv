import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/Common";
import { useApp } from "../../hooks";
import loginSVG from "../../assets/login/login.svg";

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
          <h1 className="text-center">Biblioteca UNFV</h1>
          <div className="login__content__img">
            <img src={loginSVG} alt="logo" />
          </div>
          <div className="login__content__datos">
            {!auth ? <LoginForm /> : null}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  /* background-color: #fff; */
  background: linear-gradient(to bottom right, #ff8c42, #ff3b3b);
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Ajusta la altura según tus necesidades */
    h1 {
      font-weight: bold;
    }
  }

  .login__content {
    width: 80%; /* Ajusta el ancho según tus necesidades */
    max-width: 400px; /* Puedes ajustar el máximo según tus necesidades */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #fff;
    backdrop-filter: blur(
      10px
    ); /* Aplica un filtro de desenfoque para un efecto glass */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .login__content__img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      text-align: center;
      height: 200px;
      /* height: 20%; */
    }
  }
`;
