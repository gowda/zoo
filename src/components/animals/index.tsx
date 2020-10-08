import * as React from 'react';
import { Animal } from '../../store/animals/types';

import Editor from './editor';
import Item from './item';

interface Props {
  animals: Animal[];
  onAdd: (animal: Animal) => void;
  onUpdate: (animal: Animal) => void;
}

export default ({
  animals, onAdd, onUpdate,
}: Props) => (
  <>
    {
        animals.length === 0
          && (
          <>
            <div className="row mt-4 mb-4">
              <div className="col-12 pl-0 pr-0">
                <h4>
                  No animals present. Get started by adding a new animal.
                </h4>
              </div>
            </div>
          </>
          )
      }
    <div className="row">
      <div className="col-auto pl-0 pr-0">
        <Editor
          variant="new"
          label="Add new animal"
          onChange={(n, d) => onAdd({
            name: n, description: d, id: 'fixme',
          })}
        />
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-12 pl-0 pr-0">
        <div className="list-group">
          {animals.map((animal) => <Item {...animal} onChange={onUpdate} />)}
        </div>
      </div>
    </div>
  </>
);
