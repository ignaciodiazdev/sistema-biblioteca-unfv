import styled from "styled-components";
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/user";
import { useApp } from "../../hooks";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useApp();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const response = await loginApi(data);
      console.log(response)
      const { access } = response;
      console.log(access);
      login(access);
    } catch (error) {
      toast.error(error.message);
    }
  });

  return (
    <Container>
      <form className="d-flex flex-column" onSubmit={onSubmit} autoComplete="on">
        <div className="group-input">
          <input
            name="username"
            placeholder="Correo Electronico"
            {...register("username", {
              required: {
                value: true,
                message: "El Correo es requerido",
              },
              pattern: {
                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                value: /^[0-9]{10}@unfv\.edu\.pe$/,
                message: "Correo invalido",
              },
            })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div className="group-input">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "La Contraseña es requerida",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}

        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  form {
    .group-input{
      height: 70px;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      outline: none;
      font-size: 1rem;
    }
    span {
      font-size: 13px;
      margin-bottom: 10px;
    }
    button {
      width: 100%;
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      outline: none;
      font-size: 1rem;
      background-color: #343434;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #000000;
      }
    }
  }
`;
