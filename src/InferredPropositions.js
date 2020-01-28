import React from 'react';
import Proposition from './Proposition';


const InferredPropositions = (props) => {
  const displayProps = () => {
    if (props.fetchingInferredPropositionsStatus === "fetching"){
      return (<p>Calculating</p>)
    }
    else if (props.inferredPropositionSets.length > 0){

      const inferredDisplayProps = props.inferredPropositionSets[props.inferredPropositionSets.length - 1].map((ip, i) => {
        return <Proposition f={props.f} p={ip.proposition}/>
      })
      const iterationNumber = props.inferredPropositionSets.length - 1
      const resultsCount = props.inferredPropositionSets[props.inferredPropositionSets.length - 1].length
      return (
        <div>
          <p>Iteration Number: {iterationNumber}</p>
          <p>Results: {resultsCount}</p>
          {inferredDisplayProps}
        </div>
      )
    }
    else{
      return null
    }
  }

  const displayInferenceButton = () =>
  {
    if (props.inferredPropositionSets.length > 1){
      if (props.inferredPropositionSets[props.inferredPropositionSets.length - 1].length != props.inferredPropositionSets[props.inferredPropositionSets.length - 2].length){
        return <button onClick={() => {props.f.handleInferUniquePropositions()}}>Infer Unique</button>
      }
      else{
        return null
      }
    }
    else{
      return <button onClick={() => {props.f.handleInferUniquePropositions()}}>Infer Unique</button>
    }
  }

  return (
    <div className="syllogism">
      <div>
        <h3>Inferred Propositions</h3>
      </div>
      <div>
        {displayProps()}
      </div>
      <div>
        {displayInferenceButton()}
      </div>

    </div>
  );
}

export default InferredPropositions;
