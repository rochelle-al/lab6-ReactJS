import React, { useState } from 'react';

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const newCat = {
      id: Date.now(),
      name: name,
      latinName: latinName,
      image: image,
    };

    
    onAddCat(newCat);

    
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form to Add Cats</h3>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="latinName">Latin Name:</label>
        <input type="text" id="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="image">Image:</label>
        <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit" style={{ marginBottom: '1rem' }}>Submit</button>
    </form>
  );
}

export default AddCatForm;
