import { rest } from "msw";

const driverStandings = {
  MRData: {
    xmlns: "http://ergast.com/mrd/1.4",
    series: "f1",
    url: "http://ergast.com/api/f1/driverstandings/1.json",
    limit: "16",
    offset: "55",
    total: "71",
    StandingsTable: {
      driverStandings: "1",
      StandingsLists: [
        {
          season: "2005",
          round: "19",
          DriverStandings: [
            {
              position: "1",
              positionText: "1",
              points: "133",
              wins: "7",
              Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish",
              },
              Constructors: [
                {
                  constructorId: "renault",
                  url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                  name: "Renault",
                  nationality: "French",
                },
              ],
            },
          ],
        },
        {
          season: "2006",
          round: "18",
          DriverStandings: [
            {
              position: "1",
              positionText: "1",
              points: "134",
              wins: "7",
              Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish",
              },
              Constructors: [
                {
                  constructorId: "renault",
                  url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                  name: "Renault",
                  nationality: "French",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

const races = {
  MRData: {
    xmlns: "http://ergast.com/mrd/1.4",
    series: "f1",
    url: "http://ergast.com/api/f1/2006/results/1.json",
    limit: "30",
    offset: "0",
    total: "18",
    RaceTable: {
      season: "2006",
      position: "1",
      Races: [
        {
          season: "2006",
          round: "1",
          url: "http://en.wikipedia.org/wiki/2006_Bahrain_Grand_Prix",
          raceName: "Bahrain Grand Prix",
          Circuit: {
            circuitId: "bahrain",
            url: "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
            circuitName: "Bahrain International Circuit",
            Location: {
              lat: "26.0325",
              long: "50.5106",
              locality: "Sakhir",
              country: "Bahrain",
            },
          },
          date: "2006-03-12",
          time: "14:30:00Z",
          Results: [
            {
              number: "1",
              position: "1",
              positionText: "1",
              points: "10",
              Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish",
              },
              Constructor: {
                constructorId: "renault",
                url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                name: "Renault",
                nationality: "French",
              },
              grid: "4",
              laps: "57",
              status: "Finished",
              Time: { millis: "5386205", time: "1:29:46.205" },
              FastestLap: {
                rank: "3",
                lap: "21",
                Time: { time: "1:32.534" },
                AverageSpeed: { units: "kph", speed: "210.551" },
              },
            },
          ],
        },
        {
          season: "2006",
          round: "2",
          url: "http://en.wikipedia.org/wiki/2006_Malaysian_Grand_Prix",
          raceName: "Malaysian Grand Prix",
          Circuit: {
            circuitId: "sepang",
            url: "http://en.wikipedia.org/wiki/Sepang_International_Circuit",
            circuitName: "Sepang International Circuit",
            Location: {
              lat: "2.76083",
              long: "101.738",
              locality: "Kuala Lumpur",
              country: "Malaysia",
            },
          },
          date: "2006-03-19",
          time: "15:00:00Z",
          Results: [
            {
              number: "2",
              position: "1",
              positionText: "1",
              points: "10",
              Driver: {
                driverId: "fisichella",
                code: "FIS",
                url: "http://en.wikipedia.org/wiki/Giancarlo_Fisichella",
                givenName: "Giancarlo",
                familyName: "Fisichella",
                dateOfBirth: "1973-01-14",
                nationality: "Italian",
              },
              Constructor: {
                constructorId: "renault",
                url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                name: "Renault",
                nationality: "French",
              },
              grid: "1",
              laps: "56",
              status: "Finished",
              Time: { millis: "5440529", time: "1:30:40.529" },
              FastestLap: {
                rank: "2",
                lap: "16",
                Time: { time: "1:35.294" },
                AverageSpeed: { units: "kph", speed: "209.402" },
              },
            },
          ],
        },
        {
          season: "2006",
          round: "3",
          url: "http://en.wikipedia.org/wiki/2006_Australian_Grand_Prix",
          raceName: "Australian Grand Prix",
          Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
              lat: "-37.8497",
              long: "144.968",
              locality: "Melbourne",
              country: "Australia",
            },
          },
          date: "2006-04-02",
          time: "14:00:00Z",
          Results: [
            {
              number: "1",
              position: "1",
              positionText: "1",
              points: "10",
              Driver: {
                driverId: "alonso",
                permanentNumber: "14",
                code: "ALO",
                url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
                givenName: "Fernando",
                familyName: "Alonso",
                dateOfBirth: "1981-07-29",
                nationality: "Spanish",
              },
              Constructor: {
                constructorId: "renault",
                url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                name: "Renault",
                nationality: "French",
              },
              grid: "3",
              laps: "57",
              status: "Finished",
              Time: { millis: "5667870", time: "1:34:27.870" },
              FastestLap: {
                rank: "2",
                lap: "49",
                Time: { time: "1:26.189" },
                AverageSpeed: { units: "kph", speed: "221.499" },
              },
            },
          ],
        },
        {
          season: "2006",
          round: "4",
          url: "http://en.wikipedia.org/wiki/2006_San_Marino_Grand_Prix",
          raceName: "San Marino Grand Prix",
          Circuit: {
            circuitId: "imola",
            url: "http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari",
            circuitName: "Autodromo Enzo e Dino Ferrari",
            Location: {
              lat: "44.3439",
              long: "11.7167",
              locality: "Imola",
              country: "Italy",
            },
          },
          date: "2006-04-23",
          time: "14:00:00Z",
          Results: [
            {
              number: "5",
              position: "1",
              positionText: "1",
              points: "10",
              Driver: {
                driverId: "michael_schumacher",
                code: "MSC",
                url: "http://en.wikipedia.org/wiki/Michael_Schumacher",
                givenName: "Michael",
                familyName: "Schumacher",
                dateOfBirth: "1969-01-03",
                nationality: "German",
              },
              Constructor: {
                constructorId: "ferrari",
                url: "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                name: "Ferrari",
                nationality: "Italian",
              },
              grid: "1",
              laps: "62",
              status: "Finished",
              Time: { millis: "5466486", time: "1:31:06.486" },
              FastestLap: {
                rank: "2",
                lap: "19",
                Time: { time: "1:24.624" },
                AverageSpeed: { units: "kph", speed: "210.961" },
              },
            },
          ],
        },
      ],
    },
  },
};

export const handlers = [
  rest.get("http://ergast.com/api/f1/driverStandings/1.json", (_, res, ctx) => {
    return res(ctx.json(driverStandings));
  }),
  rest.get("http://ergast.com/api/f1/:year/results/1.json", (_, res, ctx) => {
    return res(ctx.json(races));
  }),
];
