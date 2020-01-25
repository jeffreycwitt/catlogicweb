import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import C from 'catlogicjs'

const PropositionList = (props) => {
  return (
    <div>
    <h1>Proposition Collection</h1>
    {
    props.propositions.map((p,i) => {
      return <p>({p.type().label}): {p.label} [{p.truthvalue.label}] <button onClick={()=>props.handleFocusProposition(p)}>Focus Proposition</button></p>
    })
    }
    </div>

  )
}
export default PropositionList;
