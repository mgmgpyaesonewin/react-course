import React, { useState } from 'react';

function HobbyInput({ hobbies, setHobbies }) {
  const [newHobby, setNewHobby] = useState('');

  const handleInputChange = (event) => {
    setNewHobby(event.target.value);
  };

  const handleAddHobby = () => {
    if (newHobby.trim() !== '' && !hobbies.includes(newHobby.trim())) {
      setHobbies(prevHobbies => [...prevHobbies, newHobby.trim()]);
      setNewHobby('');
    }
  };

  return (
    <div className="hobby-input-section">
      <input
        type="text"
        value={newHobby}
        onChange={handleInputChange}
        placeholder="Add a new hobby"
      />
      <button onClick={handleAddHobby}>Add Hobby</button>
    </div>
  );
}

export default HobbyInput;
