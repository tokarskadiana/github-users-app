import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import styles from "./styles/index.css";
import Users from "./components/Users/Users";

const App = () => (
  <Provider store={store}>
    <div className={styles.App}>
      <Users />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot !== undefined) {
  module.hot.accept();
}
