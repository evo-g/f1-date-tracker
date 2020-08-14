import axios from "axios";

export const getDriversStandingsByYearAndRound = (store, year, round, response = axios) => {
  store.actions.counter.addRequest();
  const status = "LOADING";
  store.setState({ status });
  
  response
    .get(`https://ergast.com/api/f1/${year}/${round}/results.json`)
    .then(res => {
      const raceResults = res.data.MRData.RaceTable.Races[0].Results
      const isRaceResultsEmpty = raceResults.length == 0;
      const status = isRaceResultsEmpty ? "EMPTY" : "SUCCESS";
      store.setState({ raceResults, status });
      store.actions.counter.addSuccess();
    })
    .catch(error => {
      const isError404 = error.res && res.status === 404;
      const status = isError404 ? "NOT_FOUND" : "ERROR";
      store.setState({ status });
      store.actions.counter.addFail();
    })
};

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

// getRace = index => {
//   const selectRace = store.races.find(item => item.index === index);
//   return selectRace;
// };

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
