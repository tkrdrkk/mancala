import React from 'react';
import { useScore } from '../api/useScore';

export const ScoreBoard = () => {
  const score = useScore();
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '2px black solid',
        borderRadius: '16px',
        boxShadow: '4px 4px 4px black',
        padding: 16,
      }}
    >
      <h4 style={{ margin: 0, fontSize: '1.5rem' }}>Score</h4>
      {score.settled && (
        <div>
          Winner:{' '}
          <strong style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'red' }}>{score.winner.toUpperCase()}</strong>
        </div>
      )}
      <div>{`Your Point: ${score.yourPoint}`}</div>
      <div>{`Opponent's Point: ${score.opponentsPoint}`}</div>
    </div>
  );
};
