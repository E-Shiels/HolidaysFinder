import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./modules/store/store";

import "./index.css";

import { Provider } from "react-redux";

import CssBaseline from '@material-ui/core/CssBaseline';

import grey from "@material-ui/core/colors/grey"

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: grey[700],
      contrastText: 'rgb(250, 250, 250)'
    },
    secondary: {
      main: '#ebe9e9',
      contrastText: 'rgb(0, 0, 0)'
    },
  }
})

//Allows for hot (re)loading
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
