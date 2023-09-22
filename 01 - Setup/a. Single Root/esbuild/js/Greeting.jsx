/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useRecoilValue } from 'recoil';

import { nameState } from './atoms.js';

function Greeting() {
  const name = useRecoilValue(nameState);

  return <h1>Hello {name}!</h1>;
}

export default Greeting;
