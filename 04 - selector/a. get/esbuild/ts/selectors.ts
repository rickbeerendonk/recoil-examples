/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { selector } from 'recoil';

import { nameState } from './atoms.ts';

export const nameFirstCharState = selector({
  key: 'nameFirstCharState',
  get: ({ get }) => {
    return get(nameState)[0];
  }
});
