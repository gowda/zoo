import { connect } from 'react-redux';
import AppComponent from '../components/app';

import { ADD_CAGE, Cage, UPDATE_CAGE } from '../store/cages/types';
import { RootState } from '../store';

const mapState = (state: RootState) => ({
  cages: state.cages,
  animals: state.animals,
});

const mapDispatch = {
  addCage: (cage: Cage) => ({ type: ADD_CAGE, payload: cage }),
  updateCage: (cage: Cage) => ({ type: UPDATE_CAGE, payload: cage }),
};

export default connect(mapState, mapDispatch)(AppComponent);
