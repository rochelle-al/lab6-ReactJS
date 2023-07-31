import React, { useState } from 'react';

function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  const handleClick = () => {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  };

  return (
    <div className="emoji" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <span role="img" aria-label="Emoji">
        {isHappy ? '😄' : '😢'}
      </span>
      <button onClick={handleClick}>Change Mood</button>
    </div>
  );
}

export default Emoji;