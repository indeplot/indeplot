import React from "react";
//import logo from './logo.svg';
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { useDarkMode} from './Components/ThemeChange/useDarkMode';
import { GlobalStyles } from './Components/ThemeChange/GlobalStyle';
import { darkTheme, lightTheme } from './Components/ThemeChange/Themes';

import './App.css';

import {  HomePage } from './pages'


const App = () => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
   < ThemeProvider theme={themeMode} >
     <>
     <GlobalStyles />
      <Router>
        <Route 
          path='/' 
          exact
          render={(props) => <HomePage {...props} theme={theme.toString()} themeToggler={themeToggler} />} 
        />
      </Router>
      </>
    </ThemeProvider>
  );
}


export default App;
