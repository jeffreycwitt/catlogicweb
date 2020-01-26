import React, {useState, useEffect} from 'react';
import FocusProposition from './FocusProposition';
import PropositionCollection from './PropositionCollection';
import SyllogismCollection from './SyllogismCollection';
import FocusSyllogism from './FocusSyllogism';
import './App.css';
import C from 'catlogicjs'

const App = () => {
  const [propositions, setPropositions] = useState([])
  const [syllogisms, setSyllogisms] = useState([])
  const [focusProposition, setFocusProposition] = useState(new C.Proposition("universal", "S", "affirmative", "P", "true"))
  const at = new C.Proposition("universal", "dogs", "affirmative", "animals", "true")
  const [major, setMajor] = useState(at)
  const [minor, setMinor] = useState(at)
  const [conclusion, setConclusion] = useState(at)
  const [focusSyllogism, setFocusSyllogism] = useState(new C.Syllogism(major, minor, conclusion))
  const handleAddToSyllogismCollection = (syllogism) => {
    setSyllogisms([...syllogisms, syllogism])
  }
  const handleAddToPropositionCollection = (proposition) => {
    setPropositions([...propositions, proposition])
  }
  const handleFocusProposition = (proposition) => {
    setFocusProposition(proposition)
  }
  const handleFocusMajor = (proposition) => {
    setMajor(proposition)
  }
  const handleFocusMinor = (proposition) => {
    setMinor(proposition)
  }
  const handleFocusConclusion = (proposition) => {
    setConclusion(proposition)
  }
  useEffect(() => {
    setFocusSyllogism(new C.Syllogism(major, minor, conclusion))
  }, [major, minor, conclusion])

  const functions = {
    handleAddToPropositionCollection,
    handleAddToSyllogismCollection,
    handleFocusProposition,
    handleFocusMajor,
    handleFocusMinor,
    handleFocusConclusion,
  }
  return (
    <div className="App">
      <div>
        <FocusProposition f={functions} proposition={focusProposition}/>
        <PropositionCollection f={functions} propositions={propositions}/>
      </div>
      <div>
        <FocusSyllogism f={functions} syllogism={focusSyllogism}/>
        <SyllogismCollection f={functions} syllogisms={syllogisms}/>
      </div>
    </div>
  );
}

export default App;
