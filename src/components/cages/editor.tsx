import * as React from 'react';

import ButtonForDailog from '../button-for-dialog';
import Form from './form';

interface Props {
  label: string;
  variant?: string;
  name?: string;
  description?: string;
  onChange: (name: string, description: string) => void
}

export default ({
  label, variant, name, description, onChange,
}: Props) => {
  const [cage, setCage] = React.useState<any>({ name, description });

  return (
    <>
      <ButtonForDailog label={label} variant={variant} title={variant === 'new' ? 'New cage' : 'Edit cage'}>
        <Form
          name={cage.name}
          description={cage.description}
          onChange={(n, d) => setCage({ name: n, description: d })}
        />
        <div className="row">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setCage({ name, description })}
            >
              Reset
            </button>
            <button
              type="button"
              className="ml-2 btn btn-primary"
              onClick={() => onChange(cage.name, cage.description)}
            >
              Save changes
            </button>
          </div>
        </div>
      </ButtonForDailog>
    </>
  );
};
