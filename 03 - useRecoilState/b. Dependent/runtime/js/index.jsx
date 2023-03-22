/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

/* global React, ReactDOM, Recoil */

// Imports

const { RecoilRoot, atom, useRecoilState } = Recoil;

// Create Recoil Atom(s)

const countState = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0 // default value (aka initial value)
});

// React components

function Counter() {
  // Like useState() hook from React, only state is shareable between componenst
  const [count, setCount] = useRecoilState(countState);

  function handleClick() {
    setCount(c => c + 1);
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>We have clicked {count} times.</button>
    </React.Fragment>
  );
}

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Counter />
    </RecoilRoot>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
