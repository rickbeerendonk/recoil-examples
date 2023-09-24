/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { atom } from 'recoil';

export const nameState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: 'Recoil' // default value (aka initial value)
});
