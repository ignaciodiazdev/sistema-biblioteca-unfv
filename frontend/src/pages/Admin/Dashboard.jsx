import styled from "styled-components";
import {TopMenu} from '../../components/Admin'
import {Card} from '../../components/Common'
import { useApp } from "../../hooks";
import { FaBook, FaUser, FaClipboardCheck, FaCalendarAlt } from "react-icons/fa";
import unfv from '../../assets/unfv.jpg'

export const Dashboard = () => {

  const {theme} = useApp();

  return (
    <Container >
      {/* <TopMenu nameSection="Dashboard"/> */}
      <main className="contenidoPage">
        <div className="hello">
          <Card>
            <article className="article">
              <CardChild themeUse={theme} background="#FFE2E5">
                <div className="info-content">
                  <p>Total de Libros</p>
                  <span>120</span>
                </div>
                <div className="info-icon">
                  <FaBook/>
                </div>
              </CardChild>
              <CardChild themeUse={theme} background="#FFF4DE">
                <div className="info-content">
                  <p>N° de Usuarios</p>
                  <span>100</span>
                </div>
                <div className="info-icon">
                  <FaUser />
                </div>
              </CardChild>
              <CardChild themeUse={theme} background="#DCFCE7">
                <div className="info-content">
                  <p>Préstamos</p>
                  <span>300</span>
                </div>
                <div className="info-icon">
                  <FaClipboardCheck />
                </div>
              </CardChild>
              <CardChild themeUse={theme} background="#F3E8FF">
                <div className="info-content">
                  <p>Reservas</p>
                  <span>50</span>
                </div>
                <div className="info-icon">
                  <FaCalendarAlt/>
                </div>
              </CardChild>
            </article>
          </Card>
        </div>
        <img src={unfv}/>
      </main>
    </Container>
  )
}

const Container = styled.div`
  /* height: 100vh; */
  .contenidoPage{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    img{
      width: 100%;
      height: 450px;
      object-fit: fill;
    }
  }
  .article{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 25px;
    @media screen and (min-width: 576px){
      grid-template-columns: repeat(2,1fr);
    }
    @media screen and (min-width: 1200px){
      grid-template-columns: repeat(4,1fr);
    }
  }
`;

const CardChild = styled.div`
  /* background: ${({background}) => background || `theme.bg`}; */
  background: ${({themeUse, background}) => themeUse === "light"? `${background}` :`#1c1f30`};
  border: ${(props) => props.theme.bordercardsdash};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .info-content{
    p{
      font-size: 18px;
      font-weight: 500;
    }
    span{
      font-weight: bold;
      font-size: 20px;
    }
  }
  .info-icon{
    font-size: 25px;
    color: ${(props) => props.theme.coloricon};
    background: ${(props) => props.theme.bgicondash};
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;
