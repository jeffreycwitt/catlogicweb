import React from 'react';
import Proposition from './Proposition';


const InferredPropositions = (props) => {

  return (
    <div className="syllogism">
      <div>
        <h3>Inferred Propositions</h3>
      </div>
      <div>
      {
        props.inferredPropositionSets.length > 0 && props.inferredPropositionSets[props.inferredPropositionSets.length - 1].map((ip, i) => {
            return <Proposition f={props.f} p={ip.proposition}/>
      })
    }

      </div>
      <div>
        <button onClick={() => {props.f.handleInferAllPropositions()}}>Infer All</button>
        <button onClick={() => {props.f.handleInferUniquePropositions()}}>Infer Unique</button>
      </div>

    </div>
  );
}

export default InferredPropositions;
