import * as React from 'react';

import Form from './form';

interface Props {
  name?: string;
  description?: string;
  onClose: () => void;
  onSave: (name: string, description: string) => void;
}

export default ({
  name, description, onClose, onSave,
}: Props) => {
  const [cage, setCage] = React.useState<any>({ name, description });

  return (
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
            <h5 className="modal-title">Modal title</h5>
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
            <Form
              name={cage.name}
              description={cage.description}
              onChange={(k: string, v: string) => setCage({ ...cage, [k]: v })}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSave(cage.name, cage.description)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
