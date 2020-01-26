import React, {useEffect, useState} from 'react';
import './App.css';
import C from 'catlogicjs'
import Proposition from './Proposition'

const FocusProposition = (props) => {
  const [quantity, setQuantity] = useState(props.proposition.quantity.label)
  const [subject, setSubject] = useState(props.proposition.subject.label)
  const [quality, setQuality] = useState(props.proposition.quality.label)
  const [predicate, setPredicate] = useState(props.proposition.predicate.label)
  const [truthvalue, setTruthvalue] = useState(props.proposition.truthvalue.label)
  const [p, setProposition] = useState(props.proposition)
  useEffect(() => {
    setProposition(new C.Proposition(quantity, subject, quality, predicate, truthvalue))
  }, [quantity, subject, quality, predicate, truthvalue])
  useEffect(() => {
    setProposition(props.proposition)
    setQuantity(props.proposition.quantity.label)
    setSubject(props.proposition.subject.label)
    setQuality(props.proposition.quality.label)
    setPredicate(props.proposition.predicate.label)
    setTruthvalue(props.proposition.truthvalue.label)
  }, [props.proposition])
  return (
    <div className="create-proposition">
    <h3>Focused Proposition</h3>
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
      <Proposition heading="Focused" p={p} f={props.f}></Proposition>
      <p>Distribution: {p.subject.label} : {p.subject.distribution_subject(p.quantity).label} ; {p.predicate.label} : {p.predicate.distribution_predicate(p.quality).label}</p>
      <div>
      <h3>Immediate Inferences</h3>
      <Proposition heading="Contradictory" p={p.contradictory()} f={props.f}></Proposition>
      <Proposition heading="Subaltern" p={p.subaltern()} f={props.f}></Proposition>
      <Proposition heading="Subaltern" p={p.contrary()} f={props.f}></Proposition>
      <Proposition heading="Subaltern" p={p.converse()} f={props.f}></Proposition>
      <Proposition heading="Subaltern" p={p.obverse()} f={props.f}></Proposition>
      <Proposition heading="Subaltern" p={p.contrapose()} f={props.f}></Proposition>
      </div>
    </div>
  );
}

export default FocusProposition;
