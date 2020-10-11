import * as React from 'react';

import Contents from './contents';
import Editor from './editor';
import AnimalSelector from './animal-selector';
import { CageAttrs, CageProps } from '../../store/cages/types';
import { AnimalProps } from '../../store/animals/types';

type Props = CageProps & {
  onChange: (cage: CageAttrs) => void,
};

export default ({
  name,
  description,
  updatedAt,
  contents,
  onChange,
}: Props) => (
  <>
    <div
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        <h5>{name}</h5>
        <span className="badge badge-primary badge-pill">
          {contents.length}
        </span>
      </div>
      <p className="mb-1">{description}</p>
      <Contents
        contents={contents!}
        onChange={(cs: AnimalProps[]) => onChange({ contents: cs })}
      />
      <small className="text-muted">{updatedAt}</small>
      <div className="row">
        <div className="col-auto">
          <Editor
            label="Edit"
            name={name}
            description={description}
            onChange={onChange}
          />
        </div>
        <div className="col-auto">
          <AnimalSelector
            onSelect={(animal: AnimalProps) => onChange({
              contents: [...contents, animal],
            })}
          />
        </div>
      </div>
    </div>
  </>
);
