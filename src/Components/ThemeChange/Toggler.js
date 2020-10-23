import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

const MyButton = styled.button`
  background: ${({theme}) => theme.background};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
`

const Toggler = ({toggleTheme}) => {

  return (
    <MyButton onClick={toggleTheme}>
      Change Theme      
    </MyButton>
  );
}

Toggler.propTypes = {
  toggleTheme: func.isRequired,
}

export default Toggler;