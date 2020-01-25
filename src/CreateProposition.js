import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import C from 'catlogicjs'

const CreateProposition = (props) => {
  const [quantity, setQuantity] = useState(props.focusProposition.quantity.label)
  const [subject, setSubject] = useState(props.focusProposition.subject.label)
  const [quality, setQuality] = useState(props.focusProposition.quality.label)
  const [predicate, setPredicate] = useState(props.focusProposition.predicate.label)
  const [truthvalue, setTruthvalue] = useState(props.focusProposition.truthvalue.label)
  const [p, setProposition] = useState(props.focusProposition)
  useEffect(() => {
    setProposition(new C.Proposition(quantity, subject, quality, predicate, truthvalue))
  }, [quantity, subject, quality, predicate, truthvalue])
  useEffect(() => {
    setProposition(props.focusProposition)
    setQuantity(props.focusProposition.quantity.label)
    setSubject(props.focusProposition.subject.label)
    setQuality(props.focusProposition.quality.label)
    setPredicate(props.focusProposition.predicate.label)
    setTruthvalue(props.focusProposition.truthvalue.label)
  }, [props.focusProposition])
  return (
    <div className="create-proposition">
    <h1>Focused Proposition</h1>
      <form>
        <select name="quantity" value={quantity} onChange={(e) => {setQuantity(e.target.value)}}>
          <option value="universal">universal</option>
          <option value="particular">particular</option>
        </select>
        <input name="subject" value={subject} onChange={(e) => {setSubject(e.target.value)}}/>
        <select name="quality" value={quality} onChange={(e) => {setQuality(e.target.value)}}>
          <option value="affirmative">affirmative</option>
          <option value="negative">negative</option>
        </select>
        <input name="predicate" value={predicate} onChange={(e) => {setPredicate(e.target.value)}}/>
        <select name="truthvalue" value={truthvalue} onChange={(e) => {setTruthvalue(e.target.value)}}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </form>
      <p>({p.type().label}): {p.label} [{p.truthvalue.label}] <button onClick={()=>props.handleAddToPropositionList(p)}>Add To Proposition List</button></p>
      <p>Distribution: {p.subject.label} : {p.subject.distribution_subject(p.quantity).label} ; {p.predicate.label} : {p.predicate.distribution_predicate(p.quality).label}</p>
      <div>
      <h3>Immediate Inferences</h3>
      <p>Contradictory: ({p.contradictory().type().label}) {p.contradictory().label} [{p.contradictory().truthvalue.label}]</p>
      <p>Subaltern: ({p.subaltern().type().label}) {p.subaltern().label} [{p.subaltern().truthvalue.label}]</p>
      <p>Converse: ({p.converse().type().label}) {p.converse().label} [{p.converse().truthvalue.label}]</p>
      <p>Obverse: ({p.obverse().type().label}) {p.obverse().label} [{p.obverse().truthvalue.label}]</p>
      </div>
    </div>
  );
}

export default CreateProposition;
