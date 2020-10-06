export interface Animal {
  id: string;
  name: string;
  description: string;
}

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL';

interface AddAction {
  type: typeof ADD_ANIMAL;
  payload: Animal;
}

interface UpdateAction {
  type: typeof UPDATE_ANIMAL;
  payload: Animal;
}

export type ActionTypes = AddAction | UpdateAction;
