import * as React from 'react';
import PropTypes from 'prop-types';

import Modal from './modal';

interface Props {
  label?: string;
  variant?: string;
  name?: string;
  description?: string;
  onChange: (name: string, description: string) => void
}

const Component = ({
  label, variant, name, description, onChange,
}: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className={variant === 'new' ? 'btn btn-success' : 'btn btn-outline-secondary'}
        onClick={() => setShowModal(true)}
      >
        {label}
      </button>
      {
        showModal
        && (
        <Modal
          title={variant === 'new' ? 'New cage' : 'Edit cage'}
          name={name}
          description={description}
          onClose={() => setShowModal(false)}
          onSave={(n: string, d: string) => {
            onChange(n, d);
            setShowModal(false);
          }}
        />
        )
      }
    </>
  );
};

Component.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Component.defaultProps = {
  label: 'Edit',
  name: '',
  description: '',
};

export default Component;
