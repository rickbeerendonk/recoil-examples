/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { RecoilRoot } from 'recoil';

import GreetingGet from './GreetingGet.tsx';
import GreetingSet from './GreetingSet.tsx';

function App() {
  return (
    <RecoilRoot>
      <GreetingSet />
      <GreetingGet />
    </RecoilRoot>
  );
}

export default App;
