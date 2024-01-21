import styled from "styled-components";
import {Footer, Navigation} from '../../components/Client'

export const ClientLayout = ({children}) => {
  return (
    <Container>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  font-family: 'Inter', sans-serif !important;
  main{
    padding: 5rem 0;
    color: #e3e7e7;
    background: #040b89;
    background-image: linear-gradient(294deg, rgba(33,37,41, 0.01), rgba(33,37,41, 1) 85%),radial-gradient(ellipse at top left, rgba(13,110,253, 0.5), transparent 50%),radial-gradient(ellipse at top right, rgba(255,228,132, 0.5), transparent 50%),radial-gradient(ellipse at center right, rgba(112.520718,44.062154,249.437846, 0.5), transparent 50%),radial-gradient(ellipse at center left, rgba(214,51,132, 0.5), transparent 50%);
  }
`;