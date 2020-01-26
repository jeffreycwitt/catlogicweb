import React, {useEffect, useState} from 'react';
import Syllogism from './Syllogism'

const SyllogismCollection = (props) => {
  return (
    <div>
    <h3>Syllogism Collection</h3>
    {
    props.syllogisms.map((s,i) => {
      return(
      <div>
        <Syllogism s={s} f={props.f}/>
      </div>
      )
    })
    }
    </div>

  )
}
export default SyllogismCollection;
