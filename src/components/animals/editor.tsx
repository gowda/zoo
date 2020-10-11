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
  const [animal, setAnimal] = React.useState<any>({ name, description });

  return (
    <>
      <ButtonForDailog label={label} variant={variant} title={variant === 'new' ? 'New animal' : 'Edit animal'}>
        <Form
          name={animal.name}
          description={animal.description}
          onChange={(n, d) => setAnimal({ name: n, description: d })}
        />
        <div className="row">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setAnimal({ name, description })}
            >
              Reset
            </button>
            <button
              type="button"
              className="ml-2 btn btn-primary"
              onClick={() => onChange(animal.name, animal.description)}
            >
              Save changes
            </button>
          </div>
        </div>
      </ButtonForDailog>
    </>
  );
};
