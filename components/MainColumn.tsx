import React from 'react';
import DistanceInput from './DistanceInput';
import DurationInput from './DurationInput';
import PaceInput from './PaceInput';
import styles from '../styles/MainColumn.module.css';

const MainColumn: React.FC = () => {
  return (
    <div className={styles.mainColumn}>
      <DistanceInput />
      <DurationInput />
      <PaceInput />
    </div>
  );
};

export default MainColumn;