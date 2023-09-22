/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { RecoilRoot } from 'recoil';

import Use1 from './Use1.jsx';
import Use2 from './Use2.jsx';

function App() {
  return (
    <RecoilRoot>
      <Use1 />
      <Use2 />
    </RecoilRoot>
  );
}

export default App;
