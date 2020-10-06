import {
  Cage, ActionTypes, ADD_CAGE, UPDATE_CAGE,
} from './types';

const mockCages: Cage[] = [{
  id: '0001',
  name: 'Mock cage',
  description: 'A blank cage created for populating animals',
  lastUpdated: 'Just now',
  contents: [],
}];

const initialState: Cage[] = mockCages;

export default (state = initialState, action: ActionTypes): Cage[] => {
  switch (action.type) {
    case ADD_CAGE: {
      return [
        ...state,
        { ...action.payload },
      ];
    }
    case UPDATE_CAGE: {
      return state.map((cage) => {
        if (cage.id === action.payload.id) {
          return { ...action.payload };
        }
        return { ...cage };
      });
    }
    default:
      return state;
  }
};
