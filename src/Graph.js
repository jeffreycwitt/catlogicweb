import React from 'react';

const Graph = (props) => {
  const figure = props.figure
  const premisePair = props.mood.substr(0, 2);
  const imageSlug = premisePair + figure 
  const imageurl = "https://s3.amazonaws.com/lum-faculty-jcwitt-public/CatSylGraphs/" + imageSlug + ".png"
  return (
    <>
    {imageSlug.length === 3 && <img src={imageurl} width="100px" height="100px"/>}
    </>
  );
}

export default Graph;
