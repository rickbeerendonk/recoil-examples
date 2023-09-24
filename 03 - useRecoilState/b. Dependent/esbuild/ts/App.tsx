/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { RecoilRoot } from 'recoil';

import Counter from './Counter.tsx';

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Counter />
    </RecoilRoot>
  );
}

export default App;
