import * as React from 'react';

import Editor from './editor';
import { AnimalAttrs, AnimalProps } from '../../store/animals/types';

type Props = AnimalProps & { onChange: (attrs: AnimalAttrs) => void};

export default ({
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
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  </>
);
