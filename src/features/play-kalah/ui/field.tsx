import React from 'react';
import { Owner } from '../api/states';
import { Dimple } from './dimple';

export const Field = ({ owner }: { owner: Owner }) => {
  return (
    <div style={{ padding: 16, display: 'flex' }}>
      {/* HACK length指定じゃなくuseFieldで取り出す */}
      {Array.from({ length: 6 }).map((e, idx) => (
        <div key={idx.toString()} style={{ margin: 8 }}>
          <Dimple id={`${owner}Dimple${idx.toString()}`} />
        </div>
      ))}
    </div>
  );
};
