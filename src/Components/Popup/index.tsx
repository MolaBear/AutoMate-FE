// PopUp.tsx
import React from 'react';
import styled from 'styled-components';

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const PopUpWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(112 112 112 / 1%);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1000;
`;

const PopUpContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 2px rgb(159 49 255 / 9%);
`;

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, children }) => {
  return (
    <PopUpWrapper isOpen={isOpen} onClick={onClose}>
      <PopUpContent onClick={(e) => e.stopPropagation()}>
        {children}
      </PopUpContent>
    </PopUpWrapper>
  );
};

export default PopUp;
