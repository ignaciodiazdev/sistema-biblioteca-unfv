import styled from "styled-components";
import error from '../../assets/Error/error404-3.svg'

export const Error404 = () => {
  return (
    <Container>
      <img src={error}/>
      {/* <h3 className="text-center">La página que buscabas no se encuentra...</h3> */}
    </Container>
  )
}

const Container = styled.div`

  h3{
    font-size: 20px;
    /* font-weight: bold; */
    font-family: "Roboto", sans-serif !important;
  }
  img{
    width: 100%;
  }
  @media screen and (min-width: 992px) {
    img{
      height: 400px;
    }
  }


`;