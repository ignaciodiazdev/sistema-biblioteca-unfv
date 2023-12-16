import styled from "styled-components";
import {FaSearch} from 'react-icons/fa'

export const HeaderPage = (props) => {
  const {btnTitle, btnClick, btnTitleTwo, btnClickTwo} = props;
  return (
    <Container className='header-page-admin'>
      <div>
        {btnTitle && <button className="btn" onClick={btnClick}>{btnTitle}</button>}
        {btnTitleTwo && <button onClick={btnClickTwo}>{btnTitleTwo}</button>}  
      </div>
      <div className="input-search">
        <input type="text" placeholder="Buscar..."/>
        <div className="input-icon">
          <FaSearch/>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn{
    background: ${(props) => props.theme.btnPrimary};
    color: ${(props) => props.theme.btnPrimaryText};
    border: none;
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    &:active{
      background: ${(props) => props.theme.btnPrimary};
      color: ${(props) => props.theme.btnPrimaryText};
      border: none;
    }
    &:hover{
      background:${(props) => props.theme.btnPrimaryHover};
    }
  }
  .input-search{
    position: relative;
    .input-icon{
      position: absolute;
      top: 5px;
      left: 12px;
      font-size: 18px;
      color: #fff;
    }
  }
  input{
    flex: 1;
    border: none;
    background: ${({ theme }) => theme.bgInputHeader};
    padding: 8px 15px 8px 40px;
    border-radius: 5px;
    outline: none;
    color: ${({ theme }) => theme.text};
    /* border: ${({ theme }) => theme.borderInputHeader}; */
    &::placeholder{
      color:  #ffffffac;
      color: #fff;
    }
    &:focus{
      outline: none;
    }
  }
`;