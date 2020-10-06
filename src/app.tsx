import * as React from 'react';

import Greeting from './greeting';
import Cages from './cages';

import { Cage } from './cages/types';

const mockCages: Cage[] = [{
  id: '0001',
  name: 'Mock cage',
  description: 'A blank cage created for populating animals',
  lastUpdated: 'Just now',
  contents: [],
}];

export default () => {
  const [cages, setCages] = React.useState<Cage[]>(mockCages);

  return (
    <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-8 mx-auto">
          <Greeting />
          <Cages
            cages={cages}
            onAdd={(cage: Cage) => setCages([cage, ...cages])}
            onChange={(cage: Cage) => setCages(
              cages.map((c) => {
                if (c.id === cage.id) {
                  return cage;
                }
                return c;
              }),
            )}
          />
          <div className="row">
            <div className="col-12 pl-0 pr-0">
              <div className="list-group list-group-flush list-group-horizontal d-flex justify-content-center">
                <a href="#" className="list-group-item" style={{ backgroundColor: 'transparent', border: 'none' }}>Categories</a>
                <a href="#" className="list-group-item" style={{ backgroundColor: 'transparent', border: 'none' }}>Animals</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
