import React, {useState} from 'react';
import Proposition from './Proposition';

import './App.css';
import C from 'catlogicjs'

const Syllogism = (props) => {
  return (

      <>
        <div>
          <Proposition heading="Major" p={props.s.major} f={props.f}/>
          <Proposition heading="Minor" p={props.s.minor} f={props.f}/>
          <Proposition heading="Conclusion" p={props.s.conclusion} f={props.f}/>
        </div>
        <p>Validity: {props.s.validity().toString()}</p>

      </>

  );
}

export default Syllogism;
