/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useRecoilState } from 'recoil';

import { countState } from './atoms.js';

function Counter() {
  // Like useState() hook from React, only state is shareable between componenst
  const [count, setCount] = useRecoilState(countState);

  function handleClick() {
    setCount(c => c + 1);
  }

  return <button onClick={handleClick}>We have clicked {count} times.</button>;
}

export default Counter;
