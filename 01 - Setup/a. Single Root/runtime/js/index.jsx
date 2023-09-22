/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM, Recoil */

// Imports

//import { RecoilRoot, atom, useRecoilValue } from 'recoil';
const { RecoilRoot, atom, useRecoilValue } = Recoil;

// Create Recoil Atom(s)

const nameState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: 'Recoil' // default value (aka initial value)
});

// React components

function Greeting() {
  const name = useRecoilValue(nameState);

  return <h1> Hello {name}!</h1>;
}

function App() {
  return (
    <RecoilRoot>
      <Greeting />
    </RecoilRoot>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
