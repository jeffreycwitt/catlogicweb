import React from 'react';
import Syllogism from './Syllogism';
import PremisePair from './PremisePair';

import './App.css';
import C from 'catlogicjs'

const FocusPremisePair = (props) => {
  return (
    <div className="syllogism">
      <div>
        <h3>Focused Premise Pair</h3>
        <PremisePair pp={props.premisePair} f={props.f}/>
      </div>
      <div>
        <h3>Possible Syllogisms</h3>
        {props.premisePair.possibleConclusions().map((c,i) => {
          return <Syllogism s={new C.Syllogism(props.premisePair.major, props.premisePair.minor, c)} f={props.f}/>
        })
        }
      </div>
    </div>
  );
}

export default FocusPremisePair;
