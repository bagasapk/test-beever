import React from "react";

import { HomeView } from "./components";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <HomeView />
    </Provider>
  );
}

export default App;
