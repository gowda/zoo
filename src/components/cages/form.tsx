import * as React from 'react';
import { CageAttrs } from '../../store/cages/types';

interface Props {
  name: string;
  description: string;
  onChange: (attrs: CageAttrs) => void;
}

export default ({ name, description, onChange }: Props) => (
  <>
    <div className="form-group">
      <div className="row">
        <div className="col-12">
          <label htmlFor="cage-form-name">
            Name
          </label>
          <input
            id="cage-form-name"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e: InputChangeEvent) => onChange({ name: e.target.value })}
          />
          <small className="form-text text-muted">
            Name for the cage.
          </small>
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="cage-form-description">
        Description
      </label>
      <textarea
        id="cage-form-description"
        rows={4}
        className="form-control"
        value={description}
        onChange={(e: TextAreaChangeEvent) => onChange({ description: e.target.value })}
      />
      <small className="form-text text-muted">
        Detailed description for the cage.
      </small>
    </div>
  </>
);
