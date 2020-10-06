import * as React from 'react';
import { Animal } from '../../store/animals/types';

import SelectionForm from './selection-form';

interface Props {
  animals: Animal[];
  onClose: () => void;
  onSelect: (animal: Animal) => void;
}

export default ({ animals, onClose, onSelect }: Props) => (
  <div
    className="modal fade show"
    tabIndex={-1}
    role="dialog"
  >
    <div
      className="modal-dialog modal-dialog-centered"
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Select animal</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <SelectionForm animals={animals} onSelect={onSelect} />
        </div>
      </div>
    </div>
  </div>
);
