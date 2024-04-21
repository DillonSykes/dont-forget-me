import { Person } from './person.ts';

export type Location = {
  id: string;
  name: string;
  address: string | null;
  notify: boolean; // hoping this can be a flag to turn on and off notifications
  // people: Person[];
};
