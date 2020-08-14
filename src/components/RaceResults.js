import React, { Fragment } from "react";
import useGlobal from "../store";
import styled from 'styled-components';



const mapRaceResults = (raceResults = false) => {
  console.log('in race results component', raceResults)
  return (
    <div>
      <ul>
        {raceResults.map(
          (race, index) => {
            console.log(race)
            return (
              <li key={index}>
                <div className="modal-display">{race.position}</div>
                <div className="modal-display">{race.Driver.familyName}</div>
                <div className="modal-display">{race.Driver.givenName}</div>
              </li>
            )
          })}
      </ul>
    </div>
  )
};

const RaceResults = () => {
  const [globalState, globalActions] = useGlobal();
  const { status, raceResults } = globalState;
  return (
    <Fragment>
      <div>
        {status === "LOADING" && <h4>Loading...</h4>}
        {status === "SUCCESS" && mapRaceResults(raceResults)}
        {status === "EMPTY" && <h4>This year have zero races</h4>}
        {status === "NOT_FOUND" && <h4>404 - Year not found</h4>}
        {status === "ERROR" && <h4>Connection Error</h4>}
      </div>
    </Fragment>
  )
};

export default RaceResults;
