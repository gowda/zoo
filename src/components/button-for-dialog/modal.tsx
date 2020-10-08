import React, { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default ({ title, children, onClose }: Props) => (
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
          <h5 className="modal-title">{title}</h5>
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
          {children}
        </div>
      </div>
    </div>
  </div>
);
