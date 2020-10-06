import * as React from 'react';

import Modal from './modal';
import SelectionModal from '../animals/selection-modal';
import Contents from './contents';
import { Cage } from '../../store/cages/types';
import { Animal } from '../../store/animals/types';

type Props = Cage & { animals: Animal[], onChange: (c: Cage) => void};

export default ({
  id,
  name,
  description,
  lastUpdated,
  contents,
  animals,
  onChange,
}: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [showSelectionModal, setShowSelectionModal] = React.useState<boolean>(false);

  return (
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
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => setShowSelectionModal(true)}
            >
              Add animal
            </button>
          </div>
        </div>
      </div>
      {
        showModal
        && (
        <Modal
          name={name}
          description={description}
          onClose={() => setShowModal(false)}
          onSave={(n: string, d: string) => {
            onChange({
              id, name: n, description: d, lastUpdated: 'Just now', contents,
            });
            setShowModal(false);
          }}
        />
        )
      }
      {
        showSelectionModal
        && (
        <SelectionModal
          animals={animals}
          onClose={() => setShowSelectionModal(false)}
          onSelect={(animal: Animal) => {
            onChange({
              id, name, description, lastUpdated: 'Just now', contents: [...contents, animal],
            });
            setShowSelectionModal(false);
          }}
        />
        )
      }
    </>
  );
};
