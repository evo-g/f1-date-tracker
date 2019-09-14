import React from "react";
import useGlobal from "../store";

const Counter = () => {
  const [globalState, globalActions] = useGlobal();
  const searchSubmit = e => {
    e.preventDefault();
    const year = e.target.year.value;
    globalActions.formula1.getRacesByYear(year);
  };
  return (
    <form onSubmit={searchSubmit}>
      <input name="year" placeholder="year" autoComplete="off"/>
      <button type="submit">Search Races</button>
    </form>
  );
};

export default Counter;
