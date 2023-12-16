import styled from "styled-components";
import logo from "../../assets/Client/logo-aniversario.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="row gap-3 gap-sm-0 row-gap-sm-3">
          <div className="col-sm-6 col-md-3">
            <img src={logo} alt="" />
            <h4 className="my-2">Sistema de Biblioteca UNFV</h4>
            <p className="text-muted">
              Explorando el conocimiento juntos, en el mundo de la UNFV.
            </p>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5 className="my-2">Servicios en Línea</h5>
            <div className="list-items">
              <li>
                <Link
                  to="https://www.unfv.edu.pe/servicios-en-linea/relacion-de-pagos-y-codigos-de-las-tarifas-del-tupa"
                  className="text-muted"
                >
                  Relación de Pagos del TUPA
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.unfv.edu.pe/servicios-en-linea/directorio-telefonico"
                  className="text-muted"
                >
                  Directorio Telefónico
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.unfv.edu.pe/servicios-en-linea/correo-institucional"
                  className="text-muted"
                >
                  Correo Institucional
                </Link>
              </li>
            </div>
          </div>

          <div className="col-sm-6 col-md-3">
            <h5 className="my-2">Informáte UNFV</h5>
            <div className="list-items">
              <li>
                <Link to="https://www.unfv.edu.pe/" className="text-muted">
                  Universidad
                </Link>
              </li>
              <li>
                <Link to="https://www.unfv.edu.pe/oca/" className="text-muted">
                  Admisión
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.unfv.edu.pe/pregrado"
                  className="text-muted"
                >
                  Pregrado
                </Link>
              </li>
              <li>
                <Link to="http://www.unfv.edu.pe/eupg/" className="text-muted">
                  Posgrado
                </Link>
              </li>
              <li>
                <Link to="http://www.unfv.edu.pe/vrin" className="text-muted">
                  Vicerrectorado de Investigación
                </Link>
              </li>
              <li>
                <Link to="http://www.unfv.edu.pe/vrac" className="text-muted">
                  Vicerrectorado Académico
                </Link>
              </li>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <h5 className="my-2">Ubícanos</h5>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.2850581241415!2d-77.04796421520084!3d-12.046595927107603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9ecff697dc7%3A0xab11b15c71be0c0d!2sFiis%20Unfv%20Biblioteca!5e0!3m2!1ses-419!2spe!4v1700454971863!5m2!1ses-419!2spe" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  background: #323030;
  color: #d4d4d4;
  padding: 2rem 0.5rem;
  p{
    font-size: 14px;
    color: #fff !important;
  }
  img {
    max-width: 70%;
    background: #fc9636;
    border-radius: 10px;
  }
  h4 {
    font-weight: bold;
    font-size: 20px;  
    padding-right: 6rem;
  }
  h5{
    font-weight: bold;
    font-size: 17px;
  }
  a {
    font-size: 14px;
    transition: all 0.3s ease-in-out;
    color: #aeaeae !important;
    &:hover{
      color: #ff6a00 !important;
    }
  }
  iframe{
    max-width: 100%;
    height: 200px;
  }

  .list-items{
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
`;
