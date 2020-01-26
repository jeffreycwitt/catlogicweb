import React, {useEffect, useState} from 'react';
import Proposition from './Proposition'
import C from 'catlogicjs'

const PropositionCollection = (props) => {
  return (
    <div>
      <h3>Proposition Collection</h3>
      {
      props.propositions.map((p,i) => {
        return <Proposition p={p} f={props.f}/>
      })
      }
    </div>

  )
}
export default PropositionCollection;
