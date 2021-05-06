/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM, Recoil */

// Imports

const { RecoilRoot, atom, selector, useRecoilState } = Recoil;

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
  },
  set: ({ get, set }, newValue) =>
    newValue && set(nameState, newValue + get(nameState).substring(1))
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
  const [firstChar, setFirstChar] = useRecoilState(nameFirstCharState);

  const inputRef = React.useRef();

  function handleChange(e) {
    setFirstChar(e.target.value);
  }

  // Always select input value
  React.useEffect(() => inputRef.current.select());

  return (
    <input
      maxLength="1"
      ref={inputRef}
      style={{ color: 'red' }}
      value={firstChar}
      onChange={handleChange}
    />
  );
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
