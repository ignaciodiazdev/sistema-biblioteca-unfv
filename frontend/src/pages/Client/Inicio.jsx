import styled from "styled-components";
import hero from "../../assets/Client/hombre-libro.svg";
import mundo from "../../assets/Client/mundo.svg";
import graduacion from "../../assets/Client/graduacion.svg";
import calendario from "../../assets/Client/calendario.svg";

import { Link } from "react-router-dom";
import { MdAccessTime, MdLocalLibrary } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";

export const Inicio = () => {
  return (
    <Container>
      <section className="container hero-section">
        <div className="row gap-3 gap-lg-0">
          <div className="col-lg-6 hero-left">
            <h1 className="titleInicio">Sistema de Biblioteca Virtual UNFV</h1>
            <p>
              Desde Libros hasta Artículos: Reserva y realiza tu Prestámo con un
              Click. Explora nuestra biblioteca virtual, donde puedes reservar y
              prestar desde libros hasta artículos. Tu búsqueda de conocimiento
              empieza ahora.
            </p>
            <div className="group-buttons">
              <Link to="/catalogo" className="btn">
                Ver Catálogo en Línea
              </Link>
              <Link to="/catalogo" className="btn">
                Guía de Registro
              </Link>
            </div>
          </div>
          <div className="col-lg-6 hero-right">
            <img src={hero} alt="" />
          </div>
        </div>
      </section>

      <section className="container servicios-section">
        <div className="row gap-3 gap-md-0 row-gap-md-3 gap-lg-0">
          <div className="col-md-6 col-lg-3">
            <div className="card box-glass">
              <div className="card-body">
                <h5 className="card-title">Reserva</h5>
                <p className="card-text">
                  Haz tu reserva de libros de manera virtual.
                </p>
                <MdAccessTime />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card box-glass">
              <div className="card-body">
                <h5 className="card-title">Préstamos</h5>
                <p className="card-text">
                  Recoge tu préstamos en nuestra biblioteca.
                </p>
                <FaBook />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card box-glass">
              <div className="card-body">
                <h5 className="card-title">Catálogo en Línea</h5>
                <p className="card-text">
                  Visualiza los libros, revistas, artículos, etc.
                </p>
                <MdLocalLibrary />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card box-glass">
              <div className="card-body">
                <h5 className="card-title">Servicio 24 Hrs</h5>
                <p className="card-text">
                  El servicio de reserva opera todo los días.
                </p>
                <HiOutlineStatusOnline />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="guia-section">
        <div className="container">
          <h2 className="guia-title">Guía de Uso: Descrubre Cómo Funciona</h2>
          <p className="guia-description">
            Con esta sección, queremos que cada paso, desde la exploración hasta
            el disfrute de tus documentos, sea claro, accesible y enriquecedor.
            Tu viaje con nosotros es más que una simple transacción; es una
            oportunidad para descubrir y aprender de una manera sin
            complicaciones. ¡Bienvenido a tu nueva forma de interactuar con la
            biblioteca!
          </p>
        </div>
      </section>

      <section className="container pasos-section">
        <div className="row gap-3 gap-md-4 gap-lg-0">
          <div className="col-lg-6 pasos-left">
            <span>1° Paso</span>
            <h3>Encuentra tu Próxima Lectura</h3>
            <p>
              Navega a través de nuestro catálogo digital con una amplia
              variedad de libros, revistas y artículos. Utiliza filtros
              intuitivos para encontrar exactamente lo que estás buscando.
            </p>
          </div>
          <div className="col-lg-6 pasos-right">
            <img src={mundo} alt="" />
          </div>
        </div>
        <div className="row gap-3 gap-md-4 gap-lg-0 voltear">
          <div className="col-lg-6 pasos-left">
            <span>2° Paso</span>
            <h3>Tu Biblioteca, Tu Horario</h3>
            <p>
              Selecciona el libro deseado y elige las fechas convenientes para la reserva. La plataforma te guiará con facilidad a través del proceso, permitiéndote personalizar tu experiencia.
            </p>
          </div>
          <div className="col-lg-6 pasos-right">
            <img src={calendario} alt="" />
          </div>
        </div>
        <div className="row gap-3 gap-md-4 gap-lg-0">
          <div className="col-lg-6 pasos-left">
            <span>3° Paso</span>
            <h3>En el Momento que Prefieras</h3>
            <p>
              Cuando tu reserva esté lista, visita la biblioteca en el momento que solicitaste. Nuestro personal estará listo para asegurar una recogida sin complicaciones.
            </p>
          </div>
          <div className="col-lg-6 pasos-right">
            <img src={graduacion} alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  .hero-section {

    .hero-left {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    h1 {
      font-weight: 900;
      font-size: 40px;
      background: linear-gradient( to right, #e3e7e7, #00ff5f ); /* Cambia el color de izquierda a derecha */
      -webkit-background-clip: text;
      color: transparent;
      transition: background-position 0.3s ease;
    }
    h1:hover {
      background-position: 100% 0;
    }
    .group-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      a {
        padding: 5px 10px;
        font-family: "Inter", sans-serif !important;
      }
      a:first-child {
        background: #ff6600;
        color: #fff;
        transition: all 0.8s ease-in;
        &:hover {
          /* box-shadow: 0px 0px 10px 0px #ff6600ce; */
          /* background: #3589ff; */
          background: linear-gradient(to right, #0c93ec, #2ecc71);
        }
      }
      a:last-child {
        background: #fff;
        color: #ff6600;
        border: 1px solid #ff6600;
      }
    }
    img {
      max-width: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    .hero-left {
      .group-buttons {
        flex-direction: row;
        a {
          padding: 10px 20px;
        }
      }
    }
    .hero-right {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (min-width: 992px) {
    .hero-left {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }
    .hero-right {
      justify-content: end;
    }
  }
  @media screen and (min-width: 1400px) {
    /* .hero-section{
      height: 85vh;
      display: flex;
      align-items: center;
    } */

    .hero-left {
      gap: 2rem !important;
      h1 {
        font-size: 54px;
        font-weight: 900;
      }
      p {
        line-height: 1.7;
        font-size: 18px;
      }
    }
  }

  .servicios-section {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    .box-glass{
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(21, 25, 77, 0.37);
      backdrop-filter: blur(10px);
    }
    .card {
      border: none;
      transition: all 0.4s ease-in-out;
      color: #ffffffbb;
      .card-title {
        font-weight: 800;
        background: linear-gradient(to right, #0ceda2, #1ac8b45c);
        -webkit-background-clip: text;
        color: transparent;
        transition: background-position 0.3s ease;
        &:hover {
          background-position: 100% 0;
        }
      }
      .card-body {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        svg {
          font-size: 30px;
          color: #fa9856;
          /* background: #ff8819b4;
          border-radius: 50%;
          padding: 1px; */
        }
      }
    }
  }
  .guia-section {
    margin-top: 2rem;
    text-align: center;
    padding: 2rem 0;
    background: #f8f8f826;
    .guia-title {
      font-weight: 800;
      margin-bottom: 2rem;
      font-size: 26px;
    }
  }
  @media screen and (min-width: 1200px) {
    .guia-section {
      padding: 4.5rem 0;
      .guia-title {
        font-size: 30px;
      }
    }
  }
  @media screen and (min-width: 1400px) {
    .guia-section {
      margin-top: 4rem;
      .guia-title {
        font-size: 34px;
      }
      .guia-description {
        padding: 0 8rem;
      }
    }
  }

  .pasos-section {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .pasos-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.8rem;
      span {
        padding: 8px 20px;
        background: #ff6600;
        border-radius: 5px;
        color: #fff;
        font-weight: 600;
        width: 35%;
      }
      h3 {
        font-weight: bold;
        font-size: 24px;
      }
      p {
        /* padding-right: 2rem; */
      }
    }
    .pasos-right {
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
      }
    }
    .voltear{
      flex-direction: row-reverse;
    }
  }
  @media screen and (min-width: 768px) {
    .pasos-section {
      .pasos-left {
        gap: 1rem;
        span{
          width: 15%;
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .pasos-section {
      margin-top: 4rem;
      .pasos-left {
        span{
          width: 22%;
        }
        h3{
          font-size: 24px;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .pasos-section {
      .pasos-left {
        span{
          width: 19%;
        }
      }
    }
  }
  @media screen and (min-width: 1400px) {
    .pasos-section {
      .pasos-left {
        span{
          width: 16%;
        }
        h3{
          font-size: 30px;
        }
      }
    }
  }
`;
