import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux";
import { Provider } from "react-redux";
import { App } from "./components";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
