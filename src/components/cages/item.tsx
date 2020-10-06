import * as React from 'react';
import PropTypes from 'prop-types';

import Contents from './contents';
import Editor from './editor';
import AnimalSelector from './animal-selector';
import { Cage } from '../../store/cages/types';
import { Animal } from '../../store/animals/types';

type Props = Cage & { onChange: (c: Cage) => void};

const Component = ({
  id,
  name,
  description,
  lastUpdated,
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
        contents={contents}
        onChange={(c: Animal[]) => onChange({
          id, name, description, contents: c, lastUpdated: 'Just now',
        })}
      />
      <small className="text-muted">{lastUpdated}</small>
      <div className="row">
        <div className="col-auto">
          <Editor
            name={name}
            description={description}
            onChange={(n, d) => onChange({
              name: n, description: d, id, lastUpdated, contents,
            })}
          />
        </div>
        <div className="col-auto">
          <AnimalSelector
            onSelect={(a: Animal) => onChange({
              id, name, description, lastUpdated: 'Just now', contents: [...contents, a],
            })}
          />
        </div>
      </div>
    </div>
  </>
);

Component.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  lastUpdated: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func.isRequired,
};

export default Component;
