/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { RecoilRoot } from 'recoil';

import GreetingEditor from './GreetingEditor.tsx';
import GreetingFirstChar from './GreetingFirstChar.tsx';

function App() {
  return (
    <RecoilRoot>
      <GreetingEditor />
      <GreetingFirstChar />
    </RecoilRoot>
  );
}

export default App;
