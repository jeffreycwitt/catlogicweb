import React from 'react';

const Graph = (props) => {
  const figure = props.figure
  const premisePair = props.mood.substr(0, 2);
  const imageSlug = premisePair + figure + ".png"
  const imageurl = "https://s3.amazonaws.com/lum-faculty-jcwitt-public/CatSylGraphs/" + imageSlug
  return (
    <img src={imageurl} width="100px" height="100px"/>
  );
}

export default Graph;
