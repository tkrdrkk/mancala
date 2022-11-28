import React from 'react';
import { Owner } from '../api/states';
import { useStore } from '../api/useStore';
import { Marble } from './marble';

export const Store = ({ owner }: { owner: Owner }) => {
  const { marbles } = useStore({ id: `${owner}Store` });
  return (
    <div
      style={{
        padding: 8,
        width: '10vw',
        height: '50vh',
        textAlign: 'center',
      }}
    >
      <div style={{ fontWeight: 'bold', margin: 4 }}>{`${owner.toUpperCase()} STORE`}</div>
      <div style={{ margin: 4 }}>{`${marbles.length.toString()}`}</div>
      <div
        style={{
          borderRadius: '16px',
          boxShadow: 'inset 20px 20px 60px #bebebe,inset -20px -20px 60px #ffffff;',
          padding: '24px',
          height: '70%',
        }}
      >
        {marbles.map((marble, idx) => {
          return (
            <div key={`${owner}Marble${idx.toString()}`} style={{ position: 'relative', top: -8 * idx }}>
              <Marble {...marble} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
