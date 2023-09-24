/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useRecoilState } from 'recoil';

import { nameState } from './atoms.ts';

function GreetingEditor() {
  // Like useState() hook from React, only state is shareable between components
  const [name, setName] = useRecoilState(nameState);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </>
  );
}

export default GreetingEditor;
