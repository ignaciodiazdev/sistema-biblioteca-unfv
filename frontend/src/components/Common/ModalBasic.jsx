import styled from "styled-components";
import { useState, cloneElement } from 'react';
import { Button, Modal } from 'antd';

export const ModalBasic = ({ children, icon, buttons, title }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Button type="primary" onClick={showModal}>
        {icon}
      </Button>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={buttons}>
        {cloneElement(children, { onClose: handleCancel })}
      </Modal>
    </Container>
  );
};

const Container = styled.div`
`;
