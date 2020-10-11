export interface Animal {
  id: string;
  name: string;
  description: string;
}

export type AnimalProps = Animal;

export interface AnimalAttrs {
  name?: string;
  description?: string;
}

export const ADD_ANIMAL = 'ADD_ANIMAL';
export const UPDATE_ANIMAL = 'UPDATE_ANIMAL';

interface AddAction {
  type: typeof ADD_ANIMAL;
  payload: AnimalAttrs;
}

interface UpdateAction {
  type: typeof UPDATE_ANIMAL;
  id: string;
  payload: AnimalAttrs;
}

export type ActionTypes = AddAction | UpdateAction;
