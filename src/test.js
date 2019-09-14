const data = [{
  MRData: {
    xmlns: "http://ergast.com/mrd/1.4",
    series: "f1",
    url: "http://ergast.com/api/f1/2008.json",
    limit: "30",
    offset: "0",
    total: "18",
    RaceTable: {
      season: "2008",
      Races: [
        {
          season: "2008",
          round: "1",
          url: "http://en.wikipedia.org/wiki/2008_Australian_Grand_Prix",
          raceName: "Australian Grand Prix",
          Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
              lat: "-37.8497",
              long: "144.968",
              locality: "Melbourne",
              country: "Australia"
            }
          },
          date: "2008-03-16",
          time: "04:30:00Z"
        }
      ]
    }
  }
}];

const getData = data => data.map(
  ({ Races, season, round, url, raceName, curcuitId, circuitName, locality, country, date }) => 
  ({ 
    races: Races, 
    season, 
    round, 
    url, 
    name: raceName, 
    curcuitId, 
    circuitName, 
    location: locality, 
    country, 
    date 
  })
);

const output = getData(data);

const expected = [{
  races: 'Races',
  season: "2008",
  round: "1",
  url: "http://en.wikipedia.org/wiki/2008_Australian_Grand_Prix",
  name: "Australian Grand Prix",
  circuitId: "albert_park",
  location: "Melbourne",
  country: "Australia",
  date: "2008-03-16",
}];

console.log(output, expected);

// export default (output, expected);
