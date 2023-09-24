/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { nameFirstCharState } from './selectors.js';

function GreetingFirstChar() {
  const [firstChar, setFirstChar] = useRecoilState(nameFirstCharState);

  const inputRef = useRef();

  function handleChange(e) {
    setFirstChar(e.target.value);
  }

  // Always select input value
  useEffect(() => {
    if (inputRef.current == document.activeElement) {
      inputRef.current.select();
    }
  }, [firstChar]);

  return (
    <input
      maxLength="1"
      ref={inputRef}
      style={{ color: 'red' }}
      value={firstChar}
      onChange={handleChange}
      onSelect={e => e.target.select()}
    />
  );
}

export default GreetingFirstChar;
