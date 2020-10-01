import React from 'react';
import Syllogism from './Syllogism';
import Graph from './Graph';

import './App.css';
import C from 'catlogicjs'

const FocusSyllogism = (props) => {
  return (
    <div className="syllogism">
      <div>
        <h3>Focused Syllogism</h3>
        <Syllogism s={props.syllogism} f={props.f}/>
        <Graph mood={props.syllogism.mood().label} figure={props.syllogism.figure().label}/>
      </div>
      <div>
        <h3>Validity Tests</h3>
        {props.syllogism.report().map((t,i) => {
          return <p>{t.testName}: {t.validity.toString()}</p>
        })
        }
      </div>
    </div>
  );
}

export default FocusSyllogism;
