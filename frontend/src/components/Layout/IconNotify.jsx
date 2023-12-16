import styled from "styled-components";
import { FaBell } from "react-icons/fa";

export const IconNotify = () => {
  return (
    <Container>
      <div className="notify">
        <FaBell className="notify__icon" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  .notify {
    &__icon {
      color: #ffffff;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
