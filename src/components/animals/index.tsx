import * as React from 'react';
import { Animal } from '../../store/animals/types';

import Item from './item';
import Modal from './modal';

interface Props {
  animals: Animal[];
  onAdd: (animal: Animal) => void;
  onUpdate: (animal: Animal) => void;
}

export default ({
  animals, onAdd, onUpdate,
}: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [nextId, setNextId] = React.useState<number>(animals.length + 1);

  return (
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
              id: `${nextId}`, name, description,
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
            {animals.map((animal) => <Item {...animal} onChange={onUpdate} />)}
          </div>
        </div>
      </div>
    </>
  );
};
