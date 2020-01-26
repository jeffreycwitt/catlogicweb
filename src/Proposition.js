import React from 'react';
const Proposition = (props) => {
  return (
    <div>
    {props.p &&
    <p className="proposition">

      {props.heading} : ({props.p.type().label}) {props.p.label} [{props.p.truthvalue.label}]
      <button onClick={()=>props.f.handleFocusProposition(props.p)}>Focus</button>
      <button onClick={()=>props.f.handleAddToPropositionCollection(props.p)}>Collection</button>
      <button onClick={()=>props.f.handleFocusMajor(props.p)}>Maj</button>
      <button onClick={()=>props.f.handleFocusMinor(props.p)}>Min</button>
      <button onClick={()=>props.f.handleFocusConclusion(props.p)}>Concl</button>
    </p>
  }
  </div>

  );
}

export default Proposition;
