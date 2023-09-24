/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useSetRecoilState } from 'recoil';

import { nameState } from './atoms.ts';

function GreetingSet() {
  // Only set atom values
  const setName = useSetRecoilState(nameState);

  function handleChange(e) {
    setName(e.target.value);
  }

  return <input autoFocus onChange={handleChange} />;
}

export default GreetingSet;
