import React from 'react';
import { Field } from './field';
import { ScoreBoard } from './scoreBoard';
import { Store } from './store';

// HACK Territory概念をコンポーネントに落としこむ脳がない。自分と相手で配置が違うのでしょうがないと考えるか…
export const Board = () => {
  return (
    <div style={{ border: 'black solid 1px', padding: 16 }}>
      <div
        style={{
          border: 'skyblue solid 1px',
          padding: 16,
          textAlign: 'center',
        }}
      >
        <div style={{ padding: '8px 30%' }}>
          <ScoreBoard />
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: '8px' }}>
            <Store owner='opponents' />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ margin: '8px 0px' }}>
              <Field owner='opponents' />
            </div>
            <div style={{ margin: '8px 0px' }}>
              <Field owner='your' />
            </div>
          </div>
          <div style={{ margin: '8px' }}>
            <Store owner='your' />
          </div>
        </div>
      </div>
    </div>
  );
};
