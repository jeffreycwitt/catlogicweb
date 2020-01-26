import React, {useState} from 'react';
import Proposition from './Proposition';

import './App.css';
import C from 'catlogicjs'

const PremisePair = (props) => {
  return (

      <div>
        <Proposition heading="Major" p={props.pp.major} f={props.f}/>
        <Proposition heading="Minor" p={props.pp.minor} f={props.f}/>
      </div>

  );
}

export default PremisePair;
