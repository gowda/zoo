import * as React from 'react';

import { CageProps, CageAttrs } from '../../store/cages/types';

import Editor from './editor';
import Item from './item';

interface Props {
  cages: CageProps[];
  onAdd: (cage: CageAttrs) => void;
  onUpdate: (id: string, cage: CageAttrs) => void;
}

export default ({ cages, onAdd, onUpdate }: Props) => (
  <>
    {
        cages.length === 0
          && (
          <>
            <div className="row mt-4 mb-4">
              <div className="col-12 pl-0 pr-0">
                <h4>
                  No cages present. Get started by adding a new cage.
                </h4>
              </div>
            </div>
          </>
          )
      }
    <div className="row">
      <Editor
        variant="new"
        label="Add new cage"
        onChange={(n, d) => onAdd({ name: n, description: d })}
      />
    </div>
    <div className="row mt-2">
      <div className="col-12 pl-0 pr-0">
        <div className="list-group">
          {cages.map((cage) => (
            <Item
              key={cage.id}
              {...cage}
              onChange={(attrs: CageAttrs) => onUpdate(cage.id, attrs)}
            />
          ))}
        </div>
      </div>
    </div>
  </>
);
