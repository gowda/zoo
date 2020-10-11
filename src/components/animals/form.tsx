import * as React from 'react';
import { AnimalAttrs } from '../../store/animals/types';

interface Props {
  name: string;
  description: string;
  onChange: (attrs: AnimalAttrs) => void;
}

export default ({ name, description, onChange }: Props) => (
  <>
    <div className="form-group">
      <div className="row">
        <div className="col-12">
          <label htmlFor="animal-form-name">
            Name
          </label>
          <input
            id="animal-form-name"
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e: InputChangeEvent) => onChange({ name: e.target.value })}
          />
          <small className="form-text text-muted">
            Name for the animal.
          </small>
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="animal-form-description">
        Description
      </label>
      <textarea
        id="animal-form-description"
        rows={4}
        className="form-control"
        value={description}
        onChange={(e: TextAreaChangeEvent) => onChange({ description: e.target.value })}
      />
      <small className="form-text text-muted">
        Detailed description for the animal.
      </small>
    </div>
  </>
);
