import { connect } from 'react-redux';
import { RootState } from '../../store';
import { ADD_CAGE, Cage, UPDATE_CAGE } from '../../store/cages/types';

import Component from '../../components/cages';

const mapState = (state: RootState) => ({
  cages: state.cages,
});

const mapDispatch = {
  onAdd: (cage: Cage) => ({ type: ADD_CAGE, payload: cage }),
  onUpdate: (cage: Cage) => ({ type: UPDATE_CAGE, payload: cage }),
};

export default connect(mapState, mapDispatch)(Component);
