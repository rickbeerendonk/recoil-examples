/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { RecoilRoot } from 'recoil';

import Greeting from './Greeting.tsx';

function App() {
  return (
    <RecoilRoot>
      <Greeting />
    </RecoilRoot>
  );
}

export default App;
