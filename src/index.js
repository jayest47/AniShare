import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./Store/auth-context";
import { AnimeListContextProvider } from "./Store/anime-list";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AnimeListContextProvider>
      <App />
      </AnimeListContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
