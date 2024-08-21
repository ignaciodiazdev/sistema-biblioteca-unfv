import styled from "styled-components";
import { Link } from "react-router-dom";
import { Image, Tag } from "antd";

export const ActividadCard = ({
  nombre,
  descripcion,
  fecha,
  hora,
  imagen,
  enlace,
  lugar,
  correo,
  tipo_data,
  modalidad_data,
  estado_data,
  ponente_data,
}) => {
  let isVirtual = true;
  let isEnVivo = false;
  if (modalidad_data.nombre === "Presencial") {
    isVirtual = false;
  }
  if (estado_data.nombre === "En Progreso") {
    isEnVivo = true;
  }

  return (
    <Container>
      <div
        className="card"
        style={{ borderRadius: "13px", overflow: "hidden" }}
      >
        <Image src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <div className="tag">
            <div className="tag__modalidad">
              <Tag color="green" style={{ margin: "10px 10px 10px 0px" }}>
                {modalidad_data.nombre}
              </Tag>
              <Tag color="purple" style={{ margin: "10px 10px 10px 0px" }}>
                {lugar}
              </Tag>
            </div>
            {isEnVivo ? (
              <div className="en-vivo">
                <p>
                  <b>🔴</b>
                  <span>En Vivo</span>
                </p>
              </div>
            ) : null}
          </div>
          <p className="card-descripcion">
            {"¡Te esperamos! 😎. 📢 " + descripcion}
          </p>
          <hr />
          <div className="card-detalle">
            <p className="card-detalle-campo">
              <b>📅 Fecha:</b> <span>{fecha}</span>
            </p>
            <p className="card-detalle-campo">
              <b>⌚ Hora:</b> <span>{hora}</span>
            </p>
            {isVirtual ? (
              <p className="card-detalle-campo">
                <b>🎥 App:</b> <span>{lugar}</span>
              </p>
            ) : (
              <p className="card-detalle-campo">
                <b>🏠 Lugar:</b> <span>{lugar}</span>
              </p>
            )}
            <p className="card-detalle-campo">
              <b>📩 Email:</b> <span>{correo}</span>
            </p>
          </div>
          <hr />
          <div className="lista-ponentes">
            {ponente_data.map((ponente) => {
              return (
                <div className="ponente" key={ponente.id}>
                  <div className="ponente__contenedorImg">
                    <Image src={ponente.foto} />
                  </div>
                  <div className="ponente__datos">
                    <p className="nombre">{ponente.nombre}</p>
                    <p className="profesion">{ponente.profesion}</p>
                  </div>
                  <div className="ponente__cargo">
                    <p>Ponente</p>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <div className="botones">
            {isVirtual ? (
              <Link to={enlace} target="_blank" className="boton-actividad">
                Unirme
              </Link>
            ) : (
              <p className="boton-presencial">Actividad Presencial</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .boton-presencial {
    background: #fdefd9;
    padding: 6px;
    border: 1px dashed orange;
    border-radius: 15px;
    color: #ea9000;
    font-size: 13px;
    font-weight: 500;
    width: 100%;
    text-align: center;
  }
  .card {
    height: 100%;
    border: none;
    box-shadow: 0px 0px 5px 0px #00000040;
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }
    .card-detalle {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      b {
        width: 80px;
      }
      .card-detalle-campo {
        display: flex;
        gap: 10px;
      }
    }
    .card-descripcion {
      @media screen and (min-width: 1024px) {
        min-height: 100px;
      }
    }
  }
  .tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lista-ponentes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    @media screen and (min-width: 1024px) {
      min-height: 90px;
    }
  }
  .ponente {
    display: flex;
    gap: 10px;
    &__contenedorImg {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__datos {
      .nombre {
        font-weight: 500;
        width: 200px;
      }
      .profesion {
        color: #727272;
        font-size: 12px;
      }
    }
    &__cargo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      padding: 0 15px;
      font-size: 12px;
      p {
        background: #f4ffca;
        color: #839400;
        padding: 2px;
        border-radius: 10px;
        width: 70px;
        text-align: center;
        border: 1px dashed #95a902;
      }
    }
  }
  .botones {
    display: flex;
  }
  .boton-actividad {
    background: #6559e4;
    border: none;
    padding: 5px 10px;
    color: #ffffff;
    font-size: 15px;
    border-radius: 20px;
    width: 100%;
    min-height: 30px;
    text-align: center;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  .boton-actividad:hover {
    background: #554bc7;
    box-shadow: 0px 0px 5px 0px #6f13b0;
    color: #ffffff;
  }
  .en-vivo {
    position: relative;
  }
  .en-vivo b {
    padding-left: 2px;
    font-size: 12px;
  }

  .en-vivo span {
    font-weight: bold;
    color: red;
    padding-right: 10px;
  }

  .en-vivo::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 45%;
    height: 2px;
    background-color: red;
    animation: mover 2.8s linear infinite;
  }

  @keyframes mover {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
