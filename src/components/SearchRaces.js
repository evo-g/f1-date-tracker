import React from "react";
import useGlobal from "../store";
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
  input {
    margin: 0 1rem;
    padding .3rem .5rem .1rem .1rem;
  }
  button {
    background-color: #ff2800;
    border-radius: .2rem;
    color: #FFFFFF;
    border: none;
    padding: .5rem 1.5rem
  }
  button:hover {
    background-color: #ff2800cf;
    cursor: pointer;
  }
  button:focus {
    background-color: #ff2800cf;
    border-radius: .2rem;
    border: none;
    outline: none;
  }
`

const Counter = () => {
  const [globalState, globalActions] = useGlobal();
  const searchSubmit = e => {
    e.preventDefault();
    const year = e.target.year.value;
    globalActions.formula1.getRacesByYear(year);
  };
  return (
    <FormWrapper onSubmit={searchSubmit}>
      <input name="year" placeholder="year" autoComplete="off" />
      <button type="submit">Search Races</button>
    </FormWrapper>
  );
};

export default Counter;
