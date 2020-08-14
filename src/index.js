import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchRaces from './components/SearchRaces';
import Races from './components/Races';
import RaceResults from './components/RaceResults';
import Counters from './components/Counters';
import styled from 'styled-components';

const MainWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  div {
    grid-column: 1/3;
    display: flex;
    justify-content: center;
  }
`;

function App() {
  return (
    <MainWrapper className="App">
      <div><h1>Search Forumla 1 Races</h1></div>
      <SearchRaces />
      <Counters />
      <Races />
      <RaceResults />
    </MainWrapper>
  );
}

render(<App />, document.getElementById('root'));
