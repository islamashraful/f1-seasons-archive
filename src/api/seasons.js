import client from "./client";

const getSeasons = (limit, offset) =>
  client.get(`/f1/driverStandings/1.json?limit=${limit}&offset=${offset}`);

const seasons = {
  getSeasons,
};

export default seasons;
