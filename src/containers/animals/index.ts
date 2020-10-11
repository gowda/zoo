import { connect } from 'react-redux';
import { RootState } from '../../store';
import { ADD_ANIMAL, AnimalAttrs, UPDATE_ANIMAL } from '../../store/animals/types';
import Component from '../../components/animals';

const mapState = (state: RootState) => ({
  animals: state.animals,
});

const mapDispatch = {
  onAdd: (attrs: AnimalAttrs) => ({ type: ADD_ANIMAL, payload: attrs }),
  onUpdate: (id: string, attrs: AnimalAttrs) => ({ type: UPDATE_ANIMAL, id, payload: attrs }),
};

export default connect(mapState, mapDispatch)(Component);
