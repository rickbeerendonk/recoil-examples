/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM, Recoil */

// Imports

const { RecoilRoot, atom, useRecoilValue } = Recoil;

// Create Recoil Atom(s)

const nameState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: 'Recoil' // default value (aka initial value)
});

// React components

function Use1() {
  // State is shared
  const name = useRecoilValue(nameState);

  return <h1>[1] Hello {name}!</h1>;
}

function Use2() {
  // State is shared
  const name = useRecoilValue(nameState);

  return <h1>[2] Hello {name}!</h1>;
}

function App() {
  return (
    <RecoilRoot>
      <Use1 />
      <Use2 />
    </RecoilRoot>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
