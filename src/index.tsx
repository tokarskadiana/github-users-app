import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import User from './components/User/User';
import Users from './components/Users/Users';
import store from './store/store';
import styles from './styles';

const App = () => (
  <Provider store={store}>
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/users/:username">
            <User />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Redirect to="/users" />
          </Route>
        </Switch>
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot !== undefined) {
  module.hot.accept();
}
