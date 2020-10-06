export interface Animal {
  id: string;
  name: string;
  description: string;
}

export const ADD_ANIMAL = 'ADD_ANIMAL';

interface AddAction {
  type: typeof ADD_ANIMAL;
  payload: Animal;
}

export type ActionTypes = AddAction;
