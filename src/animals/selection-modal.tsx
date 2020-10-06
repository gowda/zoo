import * as React from 'react';

import SelectionForm from './selection-form';

import { Animal } from './types';

interface Props {
  onClose: () => void;
  onSelect: (animal: Animal) => void;
}

export default ({ onClose, onSelect }: Props) => (
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
          <SelectionForm onSelect={onSelect} />
        </div>
      </div>
    </div>
  </div>
);
