import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./src/App";

const MOUNT_NODE = document.getElementById("root");
const ROOT = ReactDOM.createRoot(MOUNT_NODE);
ROOT.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Route path="/" element={<App />} />
      <Route path="/about" element={<h1>About</h1>} />
    </BrowserRouter>
  </React.StrictMode>
);

if (module.hot) {
  module.hot.accept();
}
