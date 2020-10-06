import { Animal } from '../animals/types';

export interface Cage {
  id: string;
  name: string;
  description: string;
  lastUpdated: string;
  contents: Animal[];
}
