import React from 'react';
import Header from '../../components/header';
import styled from 'styled-components'
import HomePage from './homepage';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Home() {
  return (
    <AppContainer>
      <Header/>
      <HomePage/>
    </AppContainer>
  );
}

export default Home;
