import React, { useState } from 'react';
import styles from '../styles/PaceInput.module.css';

const PaceInput: React.FC = () => {
  const [pace, setPace] = useState('');

  const handlePaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPace(event.target.value);
  };

  return (
    <div className={styles.paceInput}>
      <label htmlFor="pace">Pace per mile:</label>
      <input
        type="text"
        id="pace"
        value={pace}
        onChange={handlePaceChange}
        placeholder="Enter pace per mile"
      />
    </div>
  );
};

export default PaceInput;