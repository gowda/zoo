import * as React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../containers/animals/selection-modal';
import { Animal } from '../../store/animals/types';

type Props = { onSelect: (a: Animal) => void};

const Component = ({ onSelect }: Props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => setShowModal(true)}
      >
        Add animal
      </button>
      {
        showModal
        && (
        <Modal
          onClose={() => setShowModal(false)}
          onSelect={onSelect}
        />
        )
      }
    </>
  );
};

Component.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Component;
