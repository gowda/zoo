import {
  Cage, ActionTypes, ADD_CAGE, UPDATE_CAGE, CageAttrs,
} from './types';

const mockCages: Cage[] = [{
  id: '0001',
  name: 'Mock cage',
  description: 'A blank cage created for populating animals',
  updatedAt: new Date(),
  contents: [],
}];

const defaultCageAttrs: CageAttrs = {
  name: '',
  description: '',
  contents: [],
};

const initialState: Cage[] = mockCages;

export default (state = initialState, action: ActionTypes): Cage[] => {
  switch (action.type) {
    case ADD_CAGE: {
      const currentTime = new Date();
      return [
        ...state,
        {
          id: `${currentTime.getTime()}`,
          updatedAt: currentTime,
          name: action.payload.name || defaultCageAttrs.name!,
          description: action.payload.description || defaultCageAttrs.description!,
          contents: action.payload.contents || defaultCageAttrs.contents!,
        },
      ];
    }
    case UPDATE_CAGE: {
      return state.map((cage) => {
        if (cage.id === action.id) {
          return {
            ...cage,
            ...action.payload,
            updatedAt: new Date(),
          };
        }
        return { ...cage };
      });
    }
    default:
      return state;
  }
};
