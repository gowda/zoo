import * as React from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Greeting from './greeting';
import Cages from './cages';
import Animals from '../containers/animals';
import { Cage } from '../store/cages/types';

interface Props {
  cages: Cage[];
  addCage: (cage: Cage) => void;
  updateCage: (cage: Cage) => void;
}

export default ({
  cages,
  addCage,
  updateCage,
}: Props) => (
  <div className="container h-100">
    <div className="row h-100 align-items-center justify-content-center">
      <div className="col-8 mx-auto">
        <Greeting />
        <Router>
          <Switch>
            <Route path="/cages">
              <Cages
                cages={cages}
                onAdd={addCage}
                onChange={updateCage}
              />
            </Route>
            <Route path="/animals">
              <Animals />
            </Route>
            <Route path="/">
              <Cages
                cages={cages}
                onAdd={addCage}
                onChange={updateCage}
              />
            </Route>
          </Switch>

          <div className="row">
            <div className="col-12 pl-0 pr-0">
              <div className="list-group list-group-flush list-group-horizontal d-flex justify-content-center">
                <Link
                  to="/categories"
                  className="list-group-item"
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                  Categories
                </Link>
                <Link
                  to="/"
                  className="list-group-item"
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                  Cages
                </Link>
                <Link
                  to="/animals"
                  className="list-group-item"
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
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
