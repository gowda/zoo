import * as React from 'react';
import { CageAttrs } from '../../store/cages/types';

import ButtonForDailog from '../button-for-dialog';
import Form from './form';

interface Props {
  label: string;
  variant?: string;
  name?: string;
  description?: string;
  onChange: (attrs: CageAttrs) => void
}

export default ({
  label, variant, name, description, onChange,
}: Props) => {
  const [attrs, setAttrs] = React.useState<CageAttrs>({ name, description });

  return (
    <>
      <ButtonForDailog label={label} variant={variant} title={variant === 'new' ? 'New cage' : 'Edit cage'}>
        <Form
          name={attrs.name || ''}
          description={attrs.description || ''}
          onChange={(changedAttrs) => setAttrs({ ...attrs, ...changedAttrs })}
        />
        <div className="row">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setAttrs({ name, description })}
            >
              Reset
            </button>
            <button
              type="button"
              className="ml-2 btn btn-primary"
              onClick={() => onChange(attrs)}
            >
              Save changes
            </button>
          </div>
        </div>
      </ButtonForDailog>
    </>
  );
};
