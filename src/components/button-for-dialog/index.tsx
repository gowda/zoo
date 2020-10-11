import * as React from 'react';

import Modal from './modal';

interface Props {
  label: string;
  variant?: string;
  title: string;
  children: React.ReactNode;
}

export default ({
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
