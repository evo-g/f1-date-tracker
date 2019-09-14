import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchRaces from './components/SearchRaces';
import Races from './components/Races';
import Counters from './components/Counters';

function App() {
  return (
    <div className="App">
      <h1>Search Forumla 1 Races</h1>
      <SearchRaces />
      <Counters />
      <Races />
    </div>
  );
}

render(<App />, document.getElementById('root'));
