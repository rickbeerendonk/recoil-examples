/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { RecoilRoot } from 'recoil';

import GreetingEditor from './GreetingEditor.jsx';

function App() {
  return (
    <RecoilRoot>
      <GreetingEditor />
      <GreetingEditor />
    </RecoilRoot>
  );
}

export default App;
