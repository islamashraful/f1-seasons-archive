const settings = {
  dev: {
    apiUrl: "http://ergast.com/api",
  },
};

const getCurrentSettings = () => {
  return settings.dev;
};

export default getCurrentSettings();
