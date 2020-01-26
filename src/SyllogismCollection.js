import React, {useEffect, useState} from 'react';
import Syllogism from './Syllogism'

const SyllogismCollection = (props) => {
  const handleFocusSyllogism = (s) => {
    props.f.handleFocusMajor(s.major)
    props.f.handleFocusMinor(s.minor)
    props.f.handleFocusConclusion(s.conclusion)
  }
  return (
    <div>
    <h3>Syllogism Collection</h3>
    {
    props.syllogisms.map((s,i) => {
      return(
      <div>
        <Syllogism s={s} f={props.f}/>
        <button onClick={() => handleFocusSyllogism(s)}>Focus</button>
      </div>
      )
    })
    }
    </div>

  )
}
export default SyllogismCollection;
