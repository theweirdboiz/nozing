import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "/globalStyle.scss";

import store, { persistor } from "@redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
