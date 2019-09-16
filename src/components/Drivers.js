import React from "react";
import useGlobal from "../store";
import styled from 'styled-components';

const UlWrapper = styled.li`
  list-style-type: none;
`
const LiWrapper = styled.li`
  text-decoration: none;
  list-style-type: none;
`

const mapDrivers = drivers => {
  return drivers.map(driver => (
    <LiWrapper key={driver.driverId}>
      <a
        href={driver.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{driver.givenName}</h3>
        <h3>{driver.familyName}</h3>
      </a>
      <div>Date of birth: {driver.dateOfBirth}</div>
      <div>Nationality: {driver.nationality}</div>
      <div>Number: {driver.permanentNumber}</div>
    </LiWrapper>
  ));
};

const Drivers = () => {
  const [globalState, globalActions] = useGlobal();
  const { status, drivers } = globalState;
  return (
    <div>
      {status === "LOADING" && <h4>Loading...</h4>}
      {status === "SUCCESS" && mapDrivers(drivers)}
      {status === "EMPTY" && <h4>This year have zero drivers</h4>}
      {status === "NOT_FOUND" && <h4>404 - Year not found</h4>}
      {status === "ERROR" && <h4>Connection Error</h4>}
    </div>
  );
};

export default Drivers;