import React from "react";
import { Marble } from "./marble";

export const Dimple = () => {
  return (
    <div style={{ border: "yellowgreen solid 1px", padding: 8 }}>
      {Array.from({ length: 2 }).map((el, idx) => (
        <div key={idx.toString()} style={{ margin: 8 }}>
          <Marble color={idx % 2 === 0 ? "red" : undefined} />
        </div>
      ))}
    </div>
  );
};
