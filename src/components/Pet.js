import React from "react";


function Pet({ pet, onAdoptPet }) {
  // Handle the click event to adopt a pet
  function handleAdoptedClick() {
    onAdoptPet(pet.id);
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/* Display pet gender symbol */}
          {pet.gender === 'female' ? '♀' : '♂'}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">Pet Type</span>
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {/* Conditionally render the button based on adoption status */}
        {pet.isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptedClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}
export default Pet;