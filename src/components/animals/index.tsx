import * as React from 'react';
import { AnimalAttrs, AnimalProps } from '../../store/animals/types';

import Editor from './editor';
import Item from './item';

interface Props {
  animals: AnimalProps[];
  onAdd: (attrs: AnimalAttrs) => void;
  onUpdate: (id: string, attrs: AnimalAttrs) => void;
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
          onChange={onAdd}
        />
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-12 pl-0 pr-0">
        <div className="list-group">
          {animals.map((animal) => (
            <Item {...animal} onChange={(attrs) => onUpdate(animal.id, attrs)} />
          ))}
        </div>
      </div>
    </div>
  </>
);
