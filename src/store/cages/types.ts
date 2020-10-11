import { Animal, AnimalProps } from '../animals/types';

export interface Cage {
  id: string;
  name: string;
  description: string;
  updatedAt: Date;
  contents: Animal[];
}

export interface CageAttrs {
  id?: string;
  name?: string;
  description?: string;
  updatedAt?: string;
  contents?: AnimalProps[];
}

export interface CageProps {
  id: string;
  name: string;
  description: string;
  updatedAt: string;
  contents: Animal[];
}

export const ADD_CAGE = 'ADD_CAGE';
export const UPDATE_CAGE = 'UPDATE_CAGE';

interface AddAction {
  type: typeof ADD_CAGE;
  payload: CageAttrs;
}

interface UpdateAction {
  type: typeof UPDATE_CAGE;
  id: string;
  payload: CageAttrs;
}

export type ActionTypes = AddAction | UpdateAction;
