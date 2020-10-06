import { combineReducers } from 'redux';
import animalReducer from './animals/reducers';
import cageReducer from './cages/reducers';

export const rootReducer = combineReducers({
  animals: animalReducer,
  cages: cageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
