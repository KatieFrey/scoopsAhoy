import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ChatBox from "./ChatBox/ChatBox";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[100]
    },
    secondary: {
      main: pink[100]
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <ChatBox />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
