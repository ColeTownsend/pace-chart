import React, { useState } from 'react';
import 'styles/DistanceInput.module.css';

const DistanceInput: React.FC = () => {
  const [distance, setDistance] = useState('');

  const commonDistances = ['5k', '10k', 'Half Marathon', 'Marathon'];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistance(event.target.value);
  };

  return (
    <div className="distance-input">
      <label htmlFor="distance">Distance</label>
      <input
        list="common-distances"
        id="distance"
        name="distance"
        value={distance}
        onChange={handleInputChange}
      />
      <datalist id="common-distances">
        {commonDistances.map((distance, index) => (
          <option key={index} value={distance} />
        ))}
      </datalist>
    </div>
  );
};

export default DistanceInput;