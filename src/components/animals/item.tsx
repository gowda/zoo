import * as React from 'react';

import Modal from './modal';
import { Animal } from '../../store/animals/types';

type Props = Animal & { onChange: (a: Animal) => void};

export default ({
  id,
  name,
  description,
  onChange,
}: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
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
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowModal(true)}
            >
              Edit
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
              id, name: n, description: d,
            });
            setShowModal(false);
          }}
        />
        )
      }
    </>
  );
};
