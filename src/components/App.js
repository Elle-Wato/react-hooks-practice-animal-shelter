import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

// Mock data
const MOCK_PETS = {
  all: [
    { id: 1, name: "Fido", type: "dog", isAdopted: false },
    { id: 2, name: "Whiskers", type: "cat", isAdopted: false },
    { id: 3, name: "Porky", type: "micropig", isAdopted: false }
  ],
  cat: [
    { id: 2, name: "Whiskers", type: "cat", isAdopted: false }
  ],
  dog: [
    { id: 1, name: "Fido", type: "dog", isAdopted: false }
  ],
  micropig: [
    { id: 3, name: "Porky", type: "micropig", isAdopted: false }
  ]
};

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [error, setError] = useState(null);

  function handleChangeType(type) {
    setFilters({ type });
  }

  function handleFindPetsClick() {
    const filteredPets = MOCK_PETS[filters.type] || [];

    if (Array.isArray(filteredPets)) {
      setPets(filteredPets);
      setError(null);
    } else {
      console.error("Fetched data is not an array:", filteredPets);
      setError("Failed to fetch pets. Please try again later.");
    }
  }

  function handleAdoptPet(id) {
    const updatedPets = pets.map((pet) =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui grid">
        <div className="four wide column">
          <Filters
            onChangeType={handleChangeType}
            onFindPetsClick={handleFindPetsClick}
          />
        </div>
        <div className="twelve wide column">
          <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
        </div>
      </div>
      {error && <div className="ui negative message">{error}</div>}
    </div>
  );
}

export default App;
