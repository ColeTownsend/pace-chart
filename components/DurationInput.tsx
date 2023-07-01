import React, { useState } from 'react';
import styles from '../styles/DurationInput.module.css';

const DurationInput: React.FC = () => {
  const [duration, setDuration] = useState('');

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };

  return (
    <div className={styles.durationInput}>
      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        placeholder="HH:MM:SS"
        pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]"
        value={duration}
        onChange={handleDurationChange}
      />
    </div>
  );
};

export default DurationInput;