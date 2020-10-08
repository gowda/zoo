import * as React from 'react';
import PropTypes from 'prop-types';

import Modal from './modal';

interface Props {
  label: string;
  variant?: string;
  title: string;
  children: React.ReactNode;
}

const Component = ({
  label, variant, title, children,
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
          title={title}
          onClose={() => setShowModal(false)}
        >
          {children}
        </Modal>
        )
      }
    </>
  );
};

Component.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Component;
