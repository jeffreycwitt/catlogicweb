import React, {useState, useEffect} from 'react';
import FocusProposition from './FocusProposition';
import PropositionCollection from './PropositionCollection';
import SyllogismCollection from './SyllogismCollection';
import FocusSyllogism from './FocusSyllogism';
import FocusPremisePair from './FocusPremisePair';
import './App.css';
import C from 'catlogicjs'

const App = () => {
  const [propositions, setPropositions] = useState([])
  const [syllogisms, setSyllogisms] = useState([])
  const [focusProposition, setFocusProposition] = useState(new C.Proposition("universal", "S", "affirmative", "P", "true"))
  const at = new C.Proposition("universal", "dogs", "affirmative", "animals", "true")
  const at2 = new C.Proposition("universal", "cute things", "affirmative", "dogs", "true")
  const at3 = new C.Proposition("universal", "cute things", "affirmative", "animals", "true")
  const [major, setMajor] = useState(at)
  const [minor, setMinor] = useState(at2)
  const [conclusion, setConclusion] = useState(at3)
  const [focusSyllogism, setFocusSyllogism] = useState(new C.Syllogism(major, minor, conclusion))
  const [focusPremisePair, setFocusPremisePair] = useState(new C.PremisePair(major, minor))
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
    setFocusPremisePair(new C.PremisePair(major, minor))
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
        <FocusPremisePair f={functions} premisePair={focusPremisePair}/>
      </div>
      <div>
        <FocusSyllogism f={functions} syllogism={focusSyllogism}/>
        <SyllogismCollection f={functions} syllogisms={syllogisms}/>
      </div>
    </div>
  );
}

export default App;
