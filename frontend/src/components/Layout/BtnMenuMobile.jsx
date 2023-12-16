import styled from "styled-components";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
} from "@ant-design/icons";

export const BtnMenuMobile = ({showDrawer}) => {
  return (
    <Container>
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<MenuUnfoldOutlined />}
        className="btnMenuMobile"
      >
        Menú
      </Button>
    </Container>
  );
};

const Container = styled.div`
  .btnMenuMobile {
    margin-left: 16px;
    border-radius: 5px;
  }
`;
