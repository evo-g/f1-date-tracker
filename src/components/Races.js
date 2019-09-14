import React from "react";

import useGlobal from "../store";

const mapRaces = races => {
  return races.map(race => (
      <ul>
        <li key={race.Circuit.circuitId}>
          <a
            href={race.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{race.raceName}</h3>
          </a>
          <div>Date: {race.date}</div>
          <div>Round: {race.round}</div>
          <div>Circuit Name: {race.Circuit.circuitName}</div>
          <div>Country: {race.Circuit.Location.country}</div>
          <div>Location: {race.Circuit.Location.locality}</div>
        </li>
      </ul>
  ));
};

const Races = () => {
  const [globalState, globalActions] = useGlobal();
  const { status, races } = globalState;
  return (
    <div>
      {status === "LOADING" && <h4>Loading...</h4>}
      {status === "SUCCESS" && mapRaces(races)}
      {status === "EMPTY" && <h4>This year have zero races</h4>}
      {status === "NOT_FOUND" && <h4>404 - Year not found</h4>}
      {status === "ERROR" && <h4>Connection Error</h4>}
    </div>
  );
};

export default Races;
