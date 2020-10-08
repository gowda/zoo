import * as React from 'react';
import PropTypes from 'prop-types';

interface Props {
  name: string;
  description: string;
  onChange: (name: string, description: string) => void;
}

const Component = ({
  name, description, onChange,
}: Props) => (
  <>
    <div className="form-group">
      <div className="row">
        <div className="col-12">
          <label htmlFor="cage-form-name">
            Name
          </label>
          <input
            id="cage-form-name"
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={name}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value, description)
            }
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
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(name, e.target.value)}
      />
      <small className="form-text text-muted">
        Detailed description for the cage.
      </small>
    </div>
  </>
);

Component.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Component.defaultProps = {
  name: '',
  description: '',
};

export default Component;
