import * as React from 'react';

import Greeting from './greeting';
import Cages from './cages';
import { Cage } from '../store/cages/types';
import { Animal } from '../store/animals/types';

interface Props {
  cages: Cage[];
  animals: Animal[];
  addCage: (cage: Cage) => void;
  updateCage: (cage: Cage) => void;
}

export default ({
  cages, animals, addCage, updateCage,
}: Props) => (
  <div className="container h-100">
    <div className="row h-100 align-items-center justify-content-center">
      <div className="col-8 mx-auto">
        <Greeting />
        <Cages
          cages={cages}
          animals={animals}
          onAdd={addCage}
          onChange={updateCage}
        />
        <div className="row">
          <div className="col-12 pl-0 pr-0">
            <div className="list-group list-group-flush list-group-horizontal d-flex justify-content-center">
              <div
                className="list-group-item"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                Categories
              </div>
              <div
                className="list-group-item"
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                Animals
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
