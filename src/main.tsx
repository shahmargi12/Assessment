import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyleWrapper  from "./components/GlobalStyleWrapper";
import "./index.scss";
import defaultTheme from "./theme";
import { GlobalStyle } from "./theme/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyleWrapper GlobalStyle={GlobalStyle} theme={defaultTheme}>
      <App />
    </GlobalStyleWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
