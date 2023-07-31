import React, { useState } from 'react';
import SingleCat from './SingleCat';
import AddCatForm from './AddCatForm';

const cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'cheetah.jpg' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'cougar.jpg' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'jaguar.jpg' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'leopard.jpg' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'lion.jpg' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'snow-leopard.jpg' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'tiger.jpg' },
];

function BigCats() {
  const [catList, setCatList] = useState(cats);
  const [isSorted, setIsSorted] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [showOnlyPanthera, setShowOnlyPanthera] = useState(false);

  const handleSort = () => {
    const sortedCats = [...catList].sort((a, b) => a.name.localeCompare(b.name));
    setCatList(sortedCats);
    setIsSorted(true);
    setIsReversed(false);
    setShowOnlyPanthera(false);
  };

  const handleReverse = () => {
    const reversedCats = [...catList].reverse();
    setCatList(reversedCats);
    setIsReversed(true);
    setIsSorted(false);
    setShowOnlyPanthera(false);
  };

  const handleFilterPanthera = () => {
    const pantheraCats = cats.filter((cat) => cat.latinName.includes('Panthera'));
    setCatList(pantheraCats);
    setShowOnlyPanthera(true);
    setIsSorted(false);
    setIsReversed(false);
  };

  const handleReset = () => {
    setCatList(cats);
    setIsSorted(false);
    setIsReversed(false);
    setShowOnlyPanthera(false);
  };

  const handleAddCat = (newCat) => {
    setCatList((prevCatList) => [...prevCatList, newCat]);
  };

  const handleDeleteCat = (id) => {
    setCatList((prevCatList) => prevCatList.filter((cat) => cat.id !== id));
  };

  return (
    <div className="big-cats">
      <h2>Big Cats List</h2>
      <AddCatForm onAddCat={handleAddCat} />
      <div className="buttons">
        <button onClick={handleSort} disabled={isSorted}>
          Sort Alphabetically
        </button>
        <button onClick={handleReverse} disabled={isReversed}>
          Reverse List
        </button>
        <button onClick={handleFilterPanthera} disabled={showOnlyPanthera}>
          Show Panthera Family
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {catList.map((cat) => (
        <div key={cat.id} className="single-cat">
          <h3>{cat.name}</h3>
          <p>Latin Name: {cat.latinName}</p>
          <img src={cat.image} alt={cat.name} className="cat-image" />
          <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BigCats;
