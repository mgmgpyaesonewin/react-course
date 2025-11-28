import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

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
      <Input
        type="text"
        value={newHobby}
        onChange={handleInputChange}
        placeholder="Add a new hobby"
      />
      <Button onClick={handleAddHobby}>Add Hobby</Button>
    </div>
  );
}

export default HobbyInput;
