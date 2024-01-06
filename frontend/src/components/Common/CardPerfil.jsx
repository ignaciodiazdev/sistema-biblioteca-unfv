import styled from "styled-components";
import { FaCamera } from "react-icons/fa";
import { useApp } from "../../hooks";
import iconUsuario from "../../assets/login/icon-usuario.png";
import banner from "../../assets/User/banner-perfil.png";
import { BASE_API } from "../../utils/constants";
import { ModalBasic } from "./ModalBasic";

export const CardPerfil = ({ padding }) => {
  const { auth } = useApp();

  console.log(auth.me);
  return (
    <Container className="section-perfil" padding={padding}>
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="section-perfil__datos">
        <div className="section-perfil__datos__foto">
          <img
            src={auth.me.image ? BASE_API + auth.me.image : iconUsuario}
            alt="foto"
          />
          <ModalBasic
            title={"Carrito de Documentos"}
            icon={<FaCamera />}
            children={<input type="file" />}
            buttons={null}
          />
        </div>
        <div className="section-perfil__datos__info">
          <div className="section-perfil__datos__info__group-input">
            <label>Nombre:</label>
            <input type="text" value={auth.me.first_name} readOnly />
          </div>
          <div className="section-perfil__datos__info__group-input">
            <label>Apellido:</label>
            <input type="text" value={auth.me.last_name} readOnly />
          </div>
          <div className="section-perfil__datos__info__group-input">
            <label>Correo:</label>
            <input type="text" value={auth.me.username} readOnly />
          </div>
          <div className="section-perfil__datos__info__group-input">
            <label>DNI:</label>
            <input type="text" value={auth.me.dni} readOnly />
          </div>
          <div className="section-perfil__datos__info__group-input">
            <label>Telefono: </label>
            <input type="text" value={auth.me.celular} readOnly />
          </div>
          <div className="section-perfil__datos__info__group-input">
            <label>Codigo Institucional: </label>
            <input type="text" value={auth.me.codigo_insti} readOnly />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: rgb(255, 255, 255); // Light*/
  border: 1px solid #e4e4e4; //Light
  /* color: #b1b1b1;
  background: #191c24 !important; */
  backdrop-filter: blur(10px);
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  .banner {
    width: 100%;
    height: 180px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .section-perfil {
    &__datos {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: ${({ padding }) => padding};
      position: relative;
      @media screen and (min-width: 768px) {
        /* flex-direction: row; */
      }
      &__foto {
        position: absolute;
        top: -90px;
        left: 50%;
        transform: translateX(-50%);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid #bbbbbb;
        padding: 4px;
        background: #dbdada;
        img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
        }
        button{
          position: absolute;
          bottom: 8%;
          right: 0;
          background: #e4e6eb;
          border: none;
          border-radius: 50%;
          padding: 0.5rem;
          cursor: pointer;
          outline: none;
          display: flex;
          align-items: center;
          justify-content: center;
          svg{
            color: #000000;
            font-size: 1.2rem;
          }
        }
        button:hover{
          background: #cfd0d3 !important;
        }
      }
      &__info {
        display: flex;
        flex-direction: column;
        padding-top: 4rem;
        gap: 1rem;
        width: 100%;
        @media screen and (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        &__group-input {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          label {
            font-weight: bold;
            font-size: 16px;
          }
          input {
            padding: 0.5rem;
            border-radius: 1px;
            border: 1px solid #d7d7d7; //Light
            background: #f5f6fa; //Light
            /* background: transparent; // Dark
            border: 1px solid #45464b8f; //Dark */
            /* color: #909090; */
            outline: none;
          }
        }
      }
    }
  }
`;
