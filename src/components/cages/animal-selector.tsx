import * as React from 'react';

import Form from '../../containers/animals/selection-form';
import { AnimalProps } from '../../store/animals/types';

import ButtonForDailog from '../button-for-dialog';

type Props = { onSelect: (a: AnimalProps) => void};

export default ({ onSelect }: Props) => (
  <ButtonForDailog
    title="Select animal"
    label="Add animal"
  >
    <Form onSelect={onSelect} />
  </ButtonForDailog>
);
