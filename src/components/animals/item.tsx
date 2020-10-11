import * as React from 'react';

import Editor from './editor';
import { Animal } from '../../store/animals/types';

type Props = Animal & { onChange: (a: Animal) => void};

export default ({
  id,
  name,
  description,
  onChange,
}: Props) => (
  <>
    <div
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        <h5>{name}</h5>
      </div>
      <p className="mb-1">{description}</p>
      <div className="row">
        <div className="col-auto">
          <Editor
            label="Edit"
            name={name}
            description={description}
            onChange={(n, d) => onChange({
              name: n, description: d, id,
            })}
          />
        </div>
      </div>
    </div>
  </>
);
