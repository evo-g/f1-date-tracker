import React from "react";
import useGlobal from "../store";
import styled from 'styled-components';

const RequestWrapper = styled.p`
  display: flex;
  justify-content: center;
  grid-column: 1/3;
  grid-row: 1;
  margin-top: 2.5rem;
  span {
    margin: 0 .5rem;
  }
`

const Counters = () => {
  const [globalState, globalActions] = useGlobal();
  const { requests, success, fail } = globalState.counters;
  return (
    <RequestWrapper>
      {requests} Requests {" "}
      <span className="success">{success} Success</span> and {" "}
      <span className="fail">{fail} Fails</span>
    </RequestWrapper>
  );
};

export default Counters;