import axios from "axios";
import { async } from "q";

export const getRacesByYear = (store, year, response = axios) => {
  store.actions.counter.addRequest();
  const status = "LOADING";
  store.setState({ status });
  response
    .get(`https://ergast.com/api/f1/${year}.json`)
    .then(res => {
      const races = res.data.MRData.RaceTable.Races;
      const isRaceEmpty = races.length == 0;
      const status = isRaceEmpty ? "EMPTY" : "SUCCESS";
      store.setState({ races, status });
      store.actions.counter.addSuccess();
    })
    .catch(error => {
      const isError404 = error.res && res.status === 404;
      const status = isError404 ? "NOT_FOUND" : "ERROR";
      store.setState({ status });
      store.actions.counter.addFail();
    });
};

export const getDriversFromYear = (store, year, response = axios) => {
  store.actions.counter.addRequest();
  const status = "LOADING";
  store.setState({ status });
  response
    .get(`https://ergast.com/api/f1/${year}/drivers.json`)
    .then(res => {
      const drivers = res.data.MRData.DriverTable.DriversTable;
      const isDriversEmpty = drivers.length == 0;
      const status = isDriversEmpty ? "EMPTY" : "SUCCESS";
      store.setState({ drivers, status });
      store.actions.counter.addSuccess();
    })
    .catch(error => {
      const isError404 = error.res && res.status === 404;
      const status = isError404 ? "NOT_FOUND" : "ERROR";
      store.setState({ status });
      store.actions.counter.addFail();
    })
};

// export const getRacesByYear =  (store, year, request = axios) => {
//   store.actions.counter.addRequest();
//   const status = "LOADING";
//   store.setState({ status });
//   const raceData = request
//     .get(`https://ergast.com/api/f1/${year}.json`)
//     .then(res => console.log('inside raceData', res.data))
//     .catch(err => err)
//     console.log('axios response', raceData);
//     // const normalizeData = getData(raceData);
//     // console.log('normal',normalizeData);
//     const isRacesEmpty = raceData.length == 0;
//   try {
//     const status = isRacesEmpty ? "EMPTY" : "SUCCESS";
//     store.setState({ races, status });
//     store.actions.counter.addSuccess();
//   } 
//   catch (error) {
//     const isError404 = error.response && error.response.status === 404;
//     const status = isError404 ? "NOT_FOUND" : "ERROR";
//     store.setState({ status });
//     store.actions.counter.addFail();
//   }
// };
