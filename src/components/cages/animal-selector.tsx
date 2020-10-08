import * as React from 'react';
import PropTypes from 'prop-types';

import Form from '../../containers/animals/selection-form';
import { Animal } from '../../store/animals/types';

import ButtonForDailog from '../button-for-dialog';

type Props = { onSelect: (a: Animal) => void};

const Component = ({ onSelect }: Props) => (
  <ButtonForDailog
    title="Select animal"
    label="Add animal"
  >
    <Form onSelect={onSelect} />
  </ButtonForDailog>
);

Component.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Component;
