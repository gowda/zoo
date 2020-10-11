import * as React from 'react';
import { Animal } from '../../store/animals/types';

interface Props {
  contents: Animal[];
  onChange: (contents: Animal[]) => void;
}

export default ({ contents, onChange }: Props) => (
  <div className="row">
    <div className="col">
      {
        contents.map((a, index) => (
          <div
            className="badge badge-secondary mr-2 d-inline-flex justify-content-start align-items-center"
          >
            <span>{a.name}</span>
            <button
              type="button"
              className="close ml-2 mb-1"
              aria-label="Close"
              onClick={() => onChange(
                [...contents.slice(0, index), ...contents.slice(index + 1, contents.length)],
              )}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ))
}
    </div>
  </div>
);
