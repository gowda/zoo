import { connect } from 'react-redux';

import Component from '../../components/animals/selection-form';
import { RootState } from '../../store';

const mapState = (state: RootState) => ({
  animals: state.animals,
});

export default connect(mapState)(Component);
