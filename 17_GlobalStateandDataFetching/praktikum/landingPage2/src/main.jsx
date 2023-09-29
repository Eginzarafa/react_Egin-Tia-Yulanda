// main.jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
