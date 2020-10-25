import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 17px;
  margin: 0 16px 9px 0;
  font-weight: bold;
  text-transform: uppercase;
`;

const SwitchLabel = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
`;

const Slider = styled.div`
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    background-color: #fff;
    bottom: 4px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    border-radius: 50%;
  }
`;

const SwitchInput = styled.input`
  display: none;

  &:checked + ${Slider} {
    background-color: blue;
  }

  &:checked + ${Slider}::before {
    transform: translateX(26px);
  }
`;

const Toggler = ({ toggleTheme }) => {
  return (
    <SwitchWrapper>
      <Text>Dark Mode</Text>
      <SwitchLabel>
        <SwitchInput type='checkbox' id='checkbox' onClick={toggleTheme} />
        <Slider></Slider>
      </SwitchLabel>
    </SwitchWrapper>
  );
};

Toggler.propTypes = {
  toggleTheme: func.isRequired,
};

export default Toggler;
