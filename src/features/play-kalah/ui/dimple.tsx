import React from 'react';
import { DimpleId } from '../api/states';
import { useDimple } from '../api/useDimple';
import styles from './dimple.module.css';
import { Marble } from './marble';

export const Dimple = ({ id }: { id: DimpleId }) => {
  const { bucket, sow } = useDimple({ id });
  return (
    <div
      onClick={sow}
      className={styles.dimple}
      style={{
        padding: '24px',
        height: '20vh',
        width: '8vw',
        borderRadius: '16px',
        boxShadow: 'inset 20px 20px 60px #bebebe,inset -20px -20px 60px #ffffff;',
      }}
    >
      {bucket.marbles.map((marble, idx) => (
        <div key={`${id}-${idx.toString()}`} style={{ position: 'relative', top: idx * -8 }}>
          <Marble {...marble} />
        </div>
      ))}
    </div>
  );
};
