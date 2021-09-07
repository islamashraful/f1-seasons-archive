import client from "./client";

const endPoint = "/f1/driverStandings/1.json?limit=16&offset=55";

const getSeasons = () => client.get(endPoint);

const seasons = {
  getSeasons,
};

export default seasons;
