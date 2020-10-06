import * as React from 'react';
import { Animal } from '../../store/animals/types';
import { Cage } from '../../store/cages/types';

import Item from './item';
import Modal from './modal';

interface Props {
  cages: Cage[];
  animals: Animal[];
  onAdd: (cage: Cage) => void;
  onChange: (cage: Cage) => void;
}

export default ({
  cages, animals, onAdd, onChange,
}: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
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
        <button
          type="button"
          className="col-12 btn btn-success mx-auto"
          onClick={() => setShowModal(true)}
        >
          Add new cage
        </button>
      </div>
      {
        showModal
        && (
        <Modal
          onClose={() => setShowModal(false)}
          onSave={(name: string, description: string) => {
            onAdd({
              id: `${nextId}`, name, description, lastUpdated: 'Just now', contents: [],
            });
            setNextId(nextId + 1);
            setShowModal(false);
          }}
        />
        )
      }
      <div className="row mt-2">
        <div className="col-12 pl-0 pr-0">
          <div className="list-group">
            {cages.map((cage) => <Item {...cage} animals={animals} onChange={onChange} />)}
          </div>
        </div>
      </div>
    </>
  );
};
