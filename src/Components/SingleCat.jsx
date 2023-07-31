import React from 'react';
import './SingleCat.css';

function SingleCat({ id, name, latinName, image }) {
  return (
    <div key={id} className="single-cat">
      <h3>{name}</h3>
      <p>Latin Name: {latinName}</p>
      <img src={image} alt={name} className="cat-image"/>
    </div>
  );
}

export default SingleCat;
