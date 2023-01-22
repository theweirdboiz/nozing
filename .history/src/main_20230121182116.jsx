import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "/globalStyle.scss";

import store from "@redux";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
