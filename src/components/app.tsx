import * as React from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Greeting from './greeting';
import Cages from '../containers/cages';
import Animals from '../containers/animals';

export default () => (
  <div className="container h-100">
    <div className="row h-100 align-items-center justify-content-center">
      <div className="col-8 mx-auto">
        <Greeting />
        <Router>
          <Switch>
            <Route path="/cages">
              <Cages />
            </Route>
            <Route path="/animals">
              <Animals />
            </Route>
            <Route path="/">
              <Cages />
            </Route>
          </Switch>

          <div className="row footer">
            <div className="col-12 pl-0 pr-0">
              <div className="link list-group list-group-flush list-group-horizontal d-flex justify-content-center">
                <Link to="/categories" className="link list-group-item">
                  Categories
                </Link>
                <Link to="/" className="link list-group-item">
                  Cages
                </Link>
                <Link to="/animals" className="link list-group-item">
                  Animals
                </Link>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </div>
  </div>
);
