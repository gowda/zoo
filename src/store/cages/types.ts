import { Animal } from '../animals/types';

export interface Cage {
  id: string;
  name: string;
  description: string;
  lastUpdated: string;
  contents: Animal[];
}

export const ADD_CAGE = 'ADD_CAGE';
export const UPDATE_CAGE = 'UPDATE_CAGE';

interface AddAction {
  type: typeof ADD_CAGE;
  payload: Cage;
}

interface UpdateAction {
  type: typeof UPDATE_CAGE;
  payload: Cage;
}

export type ActionTypes = AddAction | UpdateAction;
