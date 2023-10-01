import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleSwitchContainer = styled.div`
  display: flex;
  align-items: center;    
  margin-left: 45%;
`;


const ToggleSwitchInput = styled.input`
  position: relative;
  width: 140px;
  height: 30px;
  appearance: none;
  background-color: #fff;
  border: 2px solid rgba(76,6,139,1);
  border-radius: 20px;
  outline: none;

  &:before {
    content: 'Trainee';
    position: absolute;
    padding-left: 35%;
    top: 50%;
    transform: translateY(-50%);
    color: black;
  }

  &:after {
    content: 'Trainer';
    position: absolute;
    padding-left: 35%;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    opacity: 0;
  }

  &:checked {
    background-color: #4e0191;

    &:before {
      opacity: 0;
    }

    &:after {
      opacity: 1;
    }

    & + .circle {
      transform: translateX(107px);
      background-color: white;
    }
  }
`;

const ToggleCircle = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: #4e0191;
  position: absolute;
  transition: transform 0.5s ease-in-out;

`;

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ToggleSwitchContainer>
      <ToggleSwitchInput type="checkbox" checked={isChecked} onChange={handleToggle} />
      <ToggleCircle className="circle" />
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch;