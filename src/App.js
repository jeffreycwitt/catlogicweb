import React, {useState, useEffect} from 'react';
import FocusProposition from './FocusProposition';
import InferredPropositions from './InferredPropositions';
import PropositionCollection from './PropositionCollection';
import SyllogismCollection from './SyllogismCollection';
import FocusSyllogism from './FocusSyllogism';
import FocusPremisePair from './FocusPremisePair';

import myWorker from "./test.worker";

import './App.css';
import C from 'catlogicjs'

const App = () => {
  const [propositions, setPropositions] = useState([])
  const [inferredPropositions, setInferredPropositions] = useState([])
  const [fetchingInferredPropositionsStatus, setFetchingInferredPropositionsStatus] = useState("")
  const [syllogisms, setSyllogisms] = useState([])
  const [focusProposition, setFocusProposition] = useState(new C.Proposition("universal", "dogs", "affirmative", "animals", "true"))
  const at = new C.Proposition("universal", "dogs", "affirmative", "animals", "true")
  const at2 = new C.Proposition("universal", "cute things", "affirmative", "dogs", "true")
  const at3 = new C.Proposition("universal", "cute things", "affirmative", "animals", "true")
  const [major, setMajor] = useState(at)
  const [minor, setMinor] = useState(at2)
  const [conclusion, setConclusion] = useState(at3)
  const [focusSyllogism, setFocusSyllogism] = useState(new C.Syllogism(major, minor, conclusion))
  const [focusPremisePair, setFocusPremisePair] = useState(new C.PremisePair(major, minor))
  const [manualFormEntry, setManualFormEntry] = useState("")

  useEffect(() => {
    
  }, [])

  const handleInferUniquePropositions = (set) => {
    // get last set of newly inferred propositions
    const entranceArrayFlat = inferredPropositions[inferredPropositions.length - 1]
    // modify array from output array of objects to input array of individual propositions
    const entranceArrayProps = entranceArrayFlat.map((p, i) => {
      return  p.proposition ? p.proposition : p
    })
    // webworker
      const worker = new myWorker()
      // set response when webworker is done
      worker.addEventListener("message", e => {
        setFetchingInferredPropositionsStatus("")
        console.log('[MAIN] MSG FROM WORKER: ', e.data)
        // conver returned data to include Proposition object
        const newSet = e.data.map((d) => {
          const p = d.proposition
          const newProp = new C.Proposition(p.quantity.label, p.subject.label, p.quality.label, p.predicate.label, p.truthvalue.label)
          d.proposition = newProp
          console.log("new d", d)
          return d
        })
        console.log("newSet", newSet)
        //load existing props into new Array
        const newArray = [...inferredPropositions]
        // ad new Set to new array
        newArray.push(newSet)
        setInferredPropositions(newArray)
      }, false)
      // begin fetching message
      setFetchingInferredPropositionsStatus("fetching")
      // send propositions to worker
      worker.postMessage(entranceArrayProps)
      
  }

  const handleAddToSyllogismCollection = (syllogism) => {
    setSyllogisms([...syllogisms, syllogism])
  }
  const handleAddToPropositionCollection = (proposition) => {
    setPropositions([...propositions, proposition])
    setInferredPropositions([[...propositions, proposition]])
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

  /**
   * 
   * @param {string} mood e.g. "AAA"
   * @param {string} figure  "1"
   */
  const handleManualSetSyllogism = (e) => {
    e.preventDefault();
    try{
      const moodFigure = manualFormEntry;
      const major = moodFigure.substring(0,1);
      const minor = moodFigure.substring(1,2);
      const conclusion = moodFigure.substring(2,3);
      const figure = new C.Figure(moodFigure.substring(3,4))
      console.log("figure", figure)
      const mood = new C.Mood(major, minor, conclusion)
      const form = new C.Form(mood, figure)
      const majorProposition = form.majorProposition()
      console.log(majorProposition)
      const minorProposition = form.minorProposition()
      console.log(minorProposition)
      const conclusionProposition = form.conclusion()
      console.log(conclusionProposition)
      //NOTE/TODO: I would prefer to do form.syllogism(). this works in the catlogicjs test; 
      //but I think something about the order of class imports in catlogicjs index.js 
      //is messing this up and preventing it from working
      const syllogism = new C.Syllogism(majorProposition, minorProposition, conclusionProposition)
      console.log(syllogism.figure())
      console.log("middle term", syllogism.middleTerm())
      
      setFocusSyllogism(syllogism)
    }
    catch(err){
      console.log("error", err)
    }
    
  }

  const functions = {
    handleAddToPropositionCollection,
    handleAddToSyllogismCollection,
    handleFocusProposition,
    handleFocusMajor,
    handleFocusMinor,
    handleFocusConclusion,
    handleInferUniquePropositions
  }
  return (
    <div className="App">
      <div>
        <FocusProposition f={functions} proposition={focusProposition}/>
        <PropositionCollection f={functions} propositions={propositions}/>
        <InferredPropositions f={functions} inferredPropositionSets={inferredPropositions} originalPropositions={propositions} fetchingInferredPropositionsStatus={fetchingInferredPropositionsStatus}/>
      </div>
      <div>
        <FocusPremisePair f={functions} premisePair={focusPremisePair}/>
      </div>
      <div>
        <FocusSyllogism f={functions} syllogism={focusSyllogism}/>
        <form onSubmit={handleManualSetSyllogism}>
        <input onChange={e =>setManualFormEntry(e.target.value)}/><input type="submit"/>
        </form>
        <SyllogismCollection f={functions} syllogisms={syllogisms}/>
      </div>
    </div>
  );
}

export default App;
