import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// KEEPS OUR UI IN SYNC WITH THE 'URL' - it will ONLY reload/refresh the component that need to be changed instead of refreshing/reloading the entire page
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
