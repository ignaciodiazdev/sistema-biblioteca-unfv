import styled from "styled-components";
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

export const BtnMenuDesktop = ({collapsed ,setCollapsed}) => {
  return (
    <Container>
      <Button
        type="text"
        className="toggle ms-4 p-0 me-1"
        onClick={() => setCollapsed(!collapsed)}
        icon={
          collapsed ? (
            <MenuUnfoldOutlined  className="toggle__menu" />
          ) : (
            <MenuFoldOutlined className="toggle__menu"/>
          )
        }
      ></Button>
    </Container>
  );
};

const Container = styled.div`
  .toggle{
      position: relative;
      top: 3px;
    &__menu{
      color: #FFF;
      font-size: 20px !important;
    }
  }
`;
