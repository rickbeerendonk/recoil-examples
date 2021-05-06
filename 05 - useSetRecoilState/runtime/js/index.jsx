/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM, Recoil */

// Imports

const { RecoilRoot, atom, useRecoilValue, useSetRecoilState } = Recoil;

// Create Recoil Atom(s)

const nameState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: 'Recoil' // default value (aka initial value)
});

// React components

function GreetingGet() {
  const name = useRecoilValue(nameState);

  return <h1>Hello {name}!</h1>;
}

function GreetingSet() {
  // Only set atom values
  const setName = useSetRecoilState(nameState);

  function handleChange(e) {
    setName(e.target.value);
  }

  return <input autoFocus onChange={handleChange} />;
}

function App() {
  return (
    <RecoilRoot>
      <GreetingSet />
      <GreetingGet />
    </RecoilRoot>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
