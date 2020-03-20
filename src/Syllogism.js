import React, {useState} from 'react';
import Proposition from './Proposition';

import './App.css';
import C from 'catlogicjs'

const Syllogism = (props) => {
  const handleFocusSyllogism = (s) => {
    props.f.handleFocusMajor(s.major)
    props.f.handleFocusMinor(s.minor)
    props.f.handleFocusConclusion(s.conclusion)
  }
  return (

      <div className={props.s.validity()? "valid" : "invalid"}>
        <div>
          <Proposition heading="Major" p={props.s.major} f={props.f}/>
          <Proposition heading="Minor" p={props.s.minor} f={props.f}/>
          <Proposition heading="Conclusion" p={props.s.conclusion} f={props.f}/>
        </div>
        <p>Form: {props.s.form().label} Validity: {props.s.validity().toString()}</p>
        <button onClick={() => props.f.handleAddToSyllogismCollection(props.s)}>Collection</button>
        <button onClick={() => handleFocusSyllogism(props.s)}>Focus</button>

      </div>

  );
}

export default Syllogism;
