import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

const MOUNT_NODE = document.getElementById("root");
const ROOT = ReactDOM.createRoot(MOUNT_NODE);
ROOT.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (module.hot) {
  module.hot.accept();
}
