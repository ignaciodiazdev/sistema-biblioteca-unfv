import styled from "styled-components";
import { CiBellOn } from "react-icons/ci";
import { useApp } from "../../hooks";

export const TopMenu = ({ nameSection, nameUser }) => {
  const { theme, auth } = useApp();

  return (
    <Container themeUse={theme}>
      <h2>{nameSection}</h2>
      {/* <input type="text" className="inputBusqueda" placeholder="Busque aquí..."/> */}
      {/* <div className="datos">
        <div className="notify">
          <CiBellOn className="icon" />
        </div>
        <span>Bienvenido, {auth.me.first_name} {" "} {auth.me.last_name} </span>
      </div> */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  padding: 15px 45px;
  /* padding-left: 45px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.bgtopmenu};
  color: ${(props) => props.theme.texttopmenu};
  h2 {
    flex: 1;
    font-weight: bold;
  }
  input {
    margin: 0 6rem;
    flex: 1;
    border: none;
    background: ${({ theme }) => theme.bginputTopMenu};
    padding: 8px 15px;
    border-radius: 5px;
    outline: none;
    color: ${({ theme }) => theme.text};
    &:focus {
      outline: none;
    }
  }
  .datos {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 15px;
    .notify {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .icon {
        color: #ffffff !important;
        font-size: 25px;
      }
      transition: all 0.2s ease-in-out;
    }
    span {
      font-weight: 400;
    }
  }
`;
