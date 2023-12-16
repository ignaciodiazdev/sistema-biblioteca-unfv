import styled from "styled-components";

export const Card = ({width, height, children}) => {
  return (
    <Container width={width} height={height} >
      <div>{children}</div>
    </Container>
  )
}

const Container = styled.div`
  background: ${(props) => props.theme.bgcard};
  border-radius: 5px;
  padding: 20px;
  width: ${({width}) => width || '100%'};
  height: ${(height) => height || 'auto'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;