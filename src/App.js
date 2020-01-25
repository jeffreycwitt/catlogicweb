import React, {useState} from 'react';
import logo from './logo.svg';
import CreateProposition from './CreateProposition';
import PropositionList from './PropositionList';
import './App.css';
import C from 'catlogicjs'

const App = () => {
  const [propositions, setPropositions] = useState([])
  const [focusProposition, setFocusProposition] = useState(new C.Proposition("universal", "S", "affirmative", "P", "true"))
  const handleAddToPropositionList = (proposition) => {
    setPropositions([...propositions, proposition])
  }
  const handleFocusProposition = (proposition) => {
    setFocusProposition(proposition)
  }
  return (
    <div className="App">
      <CreateProposition handleAddToPropositionList={handleAddToPropositionList} focusProposition={focusProposition}/>
      <PropositionList propositions={propositions} handleFocusProposition={handleFocusProposition}/>
    </div>
  );
}

export default App;
