/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useRecoilValue } from 'recoil';

import { nameFirstCharState } from './selectors.ts';

function GreetingFirstChar() {
  const firstChar = useRecoilValue(nameFirstCharState);

  return <h1 style={{ color: 'red' }}>{firstChar}</h1>;
}

export default GreetingFirstChar;
