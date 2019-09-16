import React from "react";
import useGlobal from "../store";
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
  input {
    margin: 0 1rem
  }
  button {
    background-color: #ff2800;
    border-radius: .5rem;
    color: #FFFFFF;
  }
`

const Counter = () => {
  const [globalState, globalActions] = useGlobal();
  const searchSubmit = e => {
    e.preventDefault();
    const year = e.target.year.value;
    globalActions.formula1.getRacesByYear(year);
    // globalActions.formula1.getDriversFromYear(year);
  };
  return (
    <FormWrapper onSubmit={searchSubmit}>
      <input name="year" placeholder="year" autoComplete="off" />
      <button type="submit">Search Races</button>
    </FormWrapper>
  );
};

export default Counter;
