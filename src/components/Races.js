import React, { Fragment } from "react";
import useGlobal from "../store";
import styled from 'styled-components';

const UlWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-column: 1/3;
  justify-content: center
`;

const LiWrapper = styled.li`
  border: 1px solid  #00a7e0;
  height: 11rem;
  width: 14rem;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    visited: inital;
    color:  #00796B;
  }
    h2 {
      text-align: center;
      color: #323F48;
    }
    h3 {
      text-align: center;
      margin: 0 1rem 1rem 1rem;
    }
  div {
    text-align: center;
  }
  button {
    margin: .5rem .5rem 1rem .5rem;
    border: none;
    background-color: #00796B;
    color: #FFFFFF;
    padding: .2rem 1rem;
  }
  button:hover {
    background-color: #009688;
    cursor: pointer;
  }
`;

const mapRaces = (races, searchDriversStandingsByYearAndRound) => {
  return races.map((race, index) => (
    <LiWrapper key={index}>
      <h2>Round: {race.round}</h2>
      <a
        href={race.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{race.raceName}</h3>
      </a>
      <div>Country: {race.Circuit.Location.country}</div>
      <div>Circuit Name: {race.Circuit.circuitName}</div>
      <div>Date: {race.date}</div>
      <div>Location: {race.Circuit.Location.locality}</div>
      <button onClick={() => searchDriversStandingsByYearAndRound(race.season, race.round)}>Race Results</button>
    </LiWrapper>
  ));
};

const Races = () => {
  const [globalState, globalActions] = useGlobal();
  const searchDriversStandingsByYearAndRound = (year, round) => {
    globalActions.formula1.getDriversStandingsByYearAndRound(year, round);
  }
  const { status, races } = globalState;
  return (
    <React.Fragment>
      <UlWrapper>
        {status === "LOADING" && <h4>Loading...</h4>}
        {status === "SUCCESS" && mapRaces(races, searchDriversStandingsByYearAndRound)}
        {status === "EMPTY" && <h4>This year have zero races</h4>}
        {status === "NOT_FOUND" && <h4>404 - Year not found</h4>}
        {status === "ERROR" && <h4>Connection Error</h4>}
      </UlWrapper >
    </React.Fragment>
  );
};

export default Races;
