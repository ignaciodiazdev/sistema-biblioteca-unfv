import styled from "styled-components";

export const ErrorLayout = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgb(252,252,252);
  background: linear-gradient(121deg, rgba(252,252,252,1) 0%, rgba(251,226,203,1) 100%); */
  background: #650489;
  background-image: linear-gradient(294deg, rgba(33,37,41, 0.01), rgba(33,37,41, 1) 85%),radial-gradient(ellipse at top left, rgba(13,110,253, 0.5), transparent 50%),radial-gradient(ellipse at top right, rgba(255,228,132, 0.5), transparent 50%),radial-gradient(ellipse at center right, rgba(112.520718,44.062154,249.437846, 0.5), transparent 50%),radial-gradient(ellipse at center left, rgba(214,51,132, 0.5), transparent 50%);
`;