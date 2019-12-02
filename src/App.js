import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button'

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#22Bbe6',
  gray: '#496057',
  pink: '#f06595'
}

function App() {
  return (
    <ThemeProvider 
      theme={{
        palette
      }}
    >
      <AppBlock>
        <Button>button</Button>
        <Button color='gray'>button</Button>
        <Button color='pink'>button</Button>
      </AppBlock>
    </ThemeProvider>
    
  );
}

export default App;
