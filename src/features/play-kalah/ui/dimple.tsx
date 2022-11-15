import React from "react";
import { Stone } from "./stone";

export const Dimple = () => {
  return (
    <div style={{ border: "yellowgreen solid 1px", padding: 8 }}>
      {Array.from({ length: 3 }).map((el, idx) => (
        <div key={idx.toString()} style={{ margin: 8 }}>
          <Stone />
        </div>
      ))}
    </div>
  );
};
