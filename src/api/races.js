import client from "./client";

const getRacesForYear = (year) => client.get(`/f1/${year}/results/1.json`);

const races = {
  getRacesForYear,
};

export default races;
