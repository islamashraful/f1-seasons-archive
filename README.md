# f1 Seasons Archive

This app shows the F1 season list from 2005 till now(2021) with a list of winners for every race of the corresponding year using [Ergast Developer API](http://ergast.com/mrd/).

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get other season's information, please change `LIMIT` and `OFFSET` values from `src/config/const.js` file.

```
const AppConstant = {
  LIMIT: 16,
  OFFSET: 55,
};
```

> To know more about `LIMIT` and `OFFSET`, have a look at _Response paging_ section from [Ergast Developer API](http://ergast.com/mrd/) reference.

## External Libraries

- [Bootstrap](https://getbootstrap.com/) as UI framework.
- [Bootstrap Icons](https://icons.getbootstrap.com/) for icons.
- [Apisauce](https://github.com/infinitered/apisauce) as http client.
- [classnames](https://www.npmjs.com/package/classnames) for className helper.

## Available Scripts

From the project directory following scripts are available:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`

Builds the app for production to the `build` folder.

### `yarn eject`

Eject the application.
