import React from 'react';

const CharacterCard = (props) => {
  const { name, image, species, status, origin } = props.character;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{species}</p>
        <p>{status}</p>
        <p>{origin.name}</p>
      </div>
    </div>
  );
}

export default CharacterCard;