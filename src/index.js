import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "./Store"
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { COLORS } from "./Theme/Theme";
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.FADE,
  containerStyle: {
    color:COLORS.red
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
