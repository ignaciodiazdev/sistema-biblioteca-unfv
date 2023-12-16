import styled from "styled-components";
import { useState } from "react";
import { Button, message, Steps, theme } from "antd";

const steps = [
  {
    title: "First",
    content: "First-Content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];
export const Pasos = ({onClose}) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <Container>
      <>
        <Steps current={current} items={items} />
        <div >{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {/* {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={onClose}
            >
              Done
            </Button>
          )} */}
        </div>
      </>
    </Container>
  );
};

const Container = styled.div``;
