/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM, Recoil */

// Imports

const { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } = Recoil;

// Create Recoil Atom(s)

const nameState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: 'Recoil' // default value (aka initial value)
});

// Create Recoil Selector(s)

const nameFirstCharState = selector({
  key: 'nameFirstCharState',
  get: ({ get }) => {
    return get(nameState)[0];
  }
});

// React components

function GreetingEditor() {
  // Like useState() hook from React, only state is shareable between componenst
  const [name, setName] = useRecoilState(nameState);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
    </React.Fragment>
  );
}

function GreetingFirstChar() {
  const firstChar = useRecoilValue(nameFirstCharState);

  return <h1 style={{ color: 'red' }}>{firstChar}</h1>;
}

function App() {
  return (
    <RecoilRoot>
      <GreetingEditor />
      <GreetingFirstChar />
    </RecoilRoot>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
