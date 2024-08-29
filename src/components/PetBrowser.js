import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  // Map over the pets array and create Pet components
  const petCards = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  ));

  // Return the component structure with the petCards rendered
  return <div className="ui cards">{petCards}</div>;
}

export default PetBrowser;