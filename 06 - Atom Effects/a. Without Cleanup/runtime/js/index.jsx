/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

/* global React, ReactDOM, Recoil */

// Imports

const { RecoilRoot, atom, useRecoilState } = Recoil;

// Create Recoil Atom(s)

const nameState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: 'Recoil', // default value (aka initial value)
  effects: [
    ({ onSet }) => {
      onSet(newName => {
        console.log('New name:', newName);
      });
    }
  ]
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

function App() {
  return (
    <RecoilRoot>
      <GreetingEditor />
      <GreetingEditor />
    </RecoilRoot>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
