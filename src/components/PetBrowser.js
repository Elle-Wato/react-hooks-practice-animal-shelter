import React from "react";

import Pet from "./Pet";

  function PetBrowser() {
  return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
 

function PetBrowser({ pets}) {


  const petCards = pets.map((pet) => (
   <Pet key={pet.id} pet={pet} />
));
  

  return <div className="ui cards">{petCards}</div>;
}
 }
export default PetBrowser;