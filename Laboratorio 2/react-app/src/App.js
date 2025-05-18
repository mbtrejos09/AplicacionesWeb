import React from 'react';
import styled from 'styled-components';
import RandomCard from './components/RandomCard.js';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  gap: 40px;
  background-color: black;
`;

const InnerWrapper = styled.div`
  background-color: #ffffff;
  padding: 30px 40px;
  border-radius: 30px;
  display: flex;
  gap: 30px;
`;

function App() {
  return (
      <Container>
      <InnerWrapper>
      <RandomCard />
      <RandomCard />
      <RandomCard />
      </InnerWrapper>
      </Container>
  );
}

export default App;
