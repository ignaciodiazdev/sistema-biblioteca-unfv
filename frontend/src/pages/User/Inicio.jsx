import styled from "styled-components";
import { Link } from "react-router-dom";
import young from "../../assets/User/young-boy.png";
import actividad1 from "../../assets/User/actividad1.jpg";
import actividad2 from "../../assets/User/actividad2.png";
import actividad3 from "../../assets/User/actividad3.png";
import ponente2 from "../../assets/User/ponente2.jfif";
import {Image, Tag} from 'antd'

export const Inicio = () => {
  let isVirtual = true;
  let isEnVivo = true;

  return (
    <Container>
      <section className="bienvenida">
        <div className="row">
          <div className="col-md-7 contenedor-info">
            <h1 className="">Bienvenido a la Biblioteca Virtual de la UNFV</h1>
            <p>
              Reserva y realiza tu Prestámo con un Click. Explora tu biblioteca
              virtual, puedes reservar y prestar desde libros hasta artículos.
              Tu búsqueda de conocimiento empieza ahora.
            </p>
            <div className="contenedor-boton">
              <Link className="btn btn-primary" to="/plataforma/catalogo">
                Ver Catálogo
              </Link>
            </div>
          </div>
          <div className="col-md-5 contenedor-img">
            <img
              src={young}
              style={{ maxWidth: "300px" }}
              alt="undraw-book-lover-light-63ed"
              border="0"
            />
          </div>
        </div>
      </section>
      <h2 className="mt-5 text-center">Próximas Actividades</h2>
      <section className="actividades">
        <div className="card" style={{ borderRadius: "13px", overflow: "hidden"}}>
          <Image src={actividad2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              Taller: Uso de la Plataforma Jurídica VLEX - Nivel Avanzado
            </h5>
            <div className="tag">
              <div className="tag__modalidad">
                <Tag color="green" style={{margin: "10px 10px 10px 0px"}}>
                  Virtual
                </Tag>
                <Tag color="purple" style={{margin: "10px 10px 10px 0px"}}>
                  MS Teams
                </Tag>
              </div>
              {
                isEnVivo ? (
                  <div className="en-vivo">
                    <span>En Vivo</span>
                  </div>
                ) : (
                  null
                )
              }
            </div>
            <p className="card-descripcion">
              ¡Te esperamos! Este miércoles 01 de febrero en el Taller: “Uso de la plataforma de información jurídica inteligente: VLEX" Nivel Avanzado 😎. 📢 "VLEX es la mejor base de datos especializada en Derecho"
            </p>
            <hr />
            <div className="card-detalle">
              <p className="card-detalle-campo">
                <b>📅 Fecha:</b> <span>01 de Setiembre del 2021</span>
              </p>
              <p className="card-detalle-campo">
                <b>⌚ Hora:</b> <span>14:00 hrs</span>
              </p>
              {
                isVirtual ? (
                  <p className="card-detalle-campo">
                    <b>🎥 App:</b> <span>Microsoft Teams</span>
                  </p>
                ):(
                  <p className="card-detalle-campo">
                    <b>🏠 Lugar:</b> <span>Auditorio 02</span>
                  </p>
                )
                  
              }
              <p className="card-detalle-campo">
                <b>📩 Email:</b> <span>biblio.central@unfv.edu.pe</span>
              </p>
            </div>
            <hr />
            <div className="ponente">
              <div className="ponente__contenedorImg">
                <Image src={ponente2} />
              </div>
              <div className="ponente__datos">
                <p className="nombre">Daniela Rocha Ayala</p>
                <p className="profesion">Customer Success Manager</p>
              </div>
              <div className="ponente__cargo">
                <p>Ponente</p>
              </div>
            </div>
            
            <br/>
            <div className="boton-actividad">
              {
                isVirtual ? (
                  <Link 
                  to="https://teams.microsoft.com/l/meetup-join/19:sRf4m5mOkYlNRdlIofS7IaRcFQU346qzMMZatS9ZuY41@thread.tacv2/1705217636231?context=%7B%22Tid%22:%228dbd6711-3051-4a69-bb5e-8714606711d6%22,%22Oid%22:%22863f90a6-add5-439b-8804-e80ff8c93bbd%22%7D" 
                  target="_blank"
                >
                  Unirme
                </Link>)
                : (
                  <p style={{background: "#fdefd9", padding: "6px", border: "1px dashed orange", borderRadius: "10px", color: "#ea9000", fontSize: "12px"}}
                  >
                    Actividad Presencial
                  </p>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    font-size: 50px;
    font-weight: 700;
    color: #ffffffd4;
  }
  /* padding: 0 40px; */
  .bienvenida {
    background: #560489;
    background-image: linear-gradient(
        294deg,
        rgba(33, 37, 41, 0.01),
        #0b5096 85%
      ),
      radial-gradient(
        ellipse at top left,
        rgba(13, 110, 253, 0.5),
        transparent 50%
      ),
      radial-gradient(
        ellipse at top right,
        rgba(255, 228, 132, 0.5),
        transparent 50%
      ),
      radial-gradient(
        ellipse at center right,
        rgba(112.520718, 44.062154, 249.437846, 0.5),
        transparent 50%
      ),
      radial-gradient(
        ellipse at center left,
        rgba(214, 51, 132, 0.5),
        transparent 50%
      );
    padding: 0px 40px;
    border-radius: 10px;

    .contenedor-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 60px 0;
      gap: 30px;
      p {
        font-size: 20px;
        color: #ffffffc8;
      }
    }
    .contenedor-img {
      display: flex;
      justify-content: center;
      align-items: end;
      img{
        width: 100%;
      }
    }
    .contenedor-boton {
      a {
        font-size: 18px;
        background: #ff6e39;
        border: none;
      }
    }
  }
  .actividades{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin: 40px 0;
    @media screen and (min-width: 576px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1400px){
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .card{
    border: none;
    box-shadow: 0px 0px 5px 0px #00000040;
    .card-img-top{
      height: 200px;
      object-fit: cover;
    }
    .card-detalle{
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      b{
        width: 80px;
      }
      .card-detalle-campo{
        display: flex;
        gap: 10px;
      }
    }
  }
  .tag{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ponente{
    display: flex;
    gap: 10px;
    &__contenedorImg{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__datos{
      .nombre{
        font-weight: 500;
      }
      .profesion{
        color: #727272;
        font-size: 12px;
      }
    }
    &__cargo{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      color: #219f05;
      background-color: #eaffcb;
      border: 1px dashed #51d200;
      border-radius: 10px;
      padding: 0 15px;
      font-size: 12px;
      font-weight: 500;
    }
  }
  .boton-actividad{
    display: flex;
    a{
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
    a:hover{
      background: #554bc7 ;
      box-shadow: 0px 0px 5px 0px #6f13b0;
      color: #ffffff;
    }
  }
  .en-vivo {
    position: relative;
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
    width: 42%;
    height: 2px;
    background-color: red;
    animation: mover 2.5s linear infinite;
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
