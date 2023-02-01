import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import AppContainer from './AppContainer';
import GlobalStyles from './components/styles/Global';


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff'
  },
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer />
    </ThemeProvider>
  </React.StrictMode>
, document.getElementById('root'));

