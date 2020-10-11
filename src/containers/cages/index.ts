import { connect } from 'react-redux';
import { RootState } from '../../store';
import { ADD_CAGE, CageAttrs, UPDATE_CAGE } from '../../store/cages/types';

import Component from '../../components/cages';

const mapState = (state: RootState) => ({
  cages: state.cages.map((c) => ({ ...c, updatedAt: c.updatedAt.toString() })),
});

const mapDispatch = {
  onAdd: (cage: CageAttrs) => ({ type: ADD_CAGE, payload: cage }),
  onUpdate: (id: string, cage: CageAttrs) => ({ type: UPDATE_CAGE, id, payload: cage }),
};

export default connect(mapState, mapDispatch)(Component);
