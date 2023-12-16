import styled from "styled-components";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Button } from "antd";

export const ToggleThemeButton = ({ theme, toggleTheme }) => {
  return (
    <Container>
      <div className="toggle_theme">
        <Button onClick={toggleTheme} className="toggle-theme__btn">
          {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
      </div>
    </Container>
  );
};
const Container = styled.div``;
