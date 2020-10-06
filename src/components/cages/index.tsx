import * as React from 'react';
import PropTypes from 'prop-types';

import { Cage } from '../../store/cages/types';

import Editor from './editor';
import Item from './item';

interface Props {
  cages: Cage[];
  onAdd: (cage: Cage) => void;
  onUpdate: (cage: Cage) => void;
}

const Component = ({
  cages, onAdd, onUpdate,
}: Props) => {
  const [nextId, setNextId] = React.useState<number>(cages.length + 1);

  return (
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
          onChange={(n, d) => {
            onAdd({
              id: `${nextId}`, name: n, description: d, lastUpdated: 'Just now', contents: [],
            });
            setNextId(nextId + 1);
          }}
        />
      </div>
      <div className="row mt-2">
        <div className="col-12 pl-0 pr-0">
          <div className="list-group">
            {cages.map((cage) => <Item {...cage} onChange={onUpdate} />)}
          </div>
        </div>
      </div>
    </>
  );
};

Component.propTypes = {
  cages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      contents: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ),
  onAdd: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Component;
