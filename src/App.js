import './App.css';
import { useState } from 'react'  //curly braces becasue it's not default
import MoleContainer from './components/MoleContainer';

function App() {

  let [score,setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    const MOLEHILLS = 9
    for(let i = 0; i < MOLEHILLS; i++) {
      hills.push(
        <MoleContainer
        key={i}
        setScore={setScore}
        score={score}
        />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
