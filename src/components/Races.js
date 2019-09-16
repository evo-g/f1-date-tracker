import React from "react";
import useGlobal from "../store";
import styled from 'styled-components';

const UlWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-column: 1/3;
  justify-content: center
`
const LiWrapper = styled.li`
  border: 1px solid  #00a7e0;
  height: 10rem;
  width: 10rem;
  margin: 1rem;
  a {
    text-decoration: none;
  }
    h2 {
      text-align: center;
      color: #323F48;;
    }
    h3 {
      text-align: center;
    }
  div {
    text-align: center;
  }
`

const mapRaces = races => {
  return races.map((race, index) => (
    <LiWrapper key={index}>
      <a
        href={race.url}
        target="_blank"
        rel="noopener noreferrer"
      >
      <h2>Round: {race.round}</h2>
        <h3>{race.raceName}</h3>
      </a>
      <div>Country: {race.Circuit.Location.country}</div>
      <div>Circuit Name: {race.Circuit.circuitName}</div>
      <div>Date: {race.date}</div>
      <div>Location: {race.Circuit.Location.locality}</div>
    </LiWrapper>
  ));
};

const Races = () => {
  const [globalState, globalActions] = useGlobal();
  const { status, races } = globalState;
  return (
    <UlWrapper>
      {status === "LOADING" && <h4>Loading...</h4>}
      {status === "SUCCESS" && mapRaces(races)}
      {status === "EMPTY" && <h4>This year have zero races</h4>}
      {status === "NOT_FOUND" && <h4>404 - Year not found</h4>}
      {status === "ERROR" && <h4>Connection Error</h4>}
    </UlWrapper>
  );
};

export default Races;
