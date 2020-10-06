import { connect } from 'react-redux';
import { RootState } from '../../store';
import { ADD_ANIMAL, Animal, UPDATE_ANIMAL } from '../../store/animals/types';
import Component from '../../components/animals';

const mapState = (state: RootState) => ({
  animals: state.animals,
});

const mapDispatch = {
  onAdd: (animal: Animal) => ({ type: ADD_ANIMAL, payload: animal }),
  onUpdate: (animal: Animal) => ({ type: UPDATE_ANIMAL, payload: animal }),
};

export default connect(mapState, mapDispatch)(Component);
