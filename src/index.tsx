import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles.css';
const theme = extendTheme({
  colors: {
    accent: {
      500: '#2D7D90' // teal accent color
    }
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif'
  }
});
render(<ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>, document.getElementById('root'));