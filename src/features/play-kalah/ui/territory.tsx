import React from "react";
import { Dimple } from "./dimple";

export const Territory = () => {
  return (
    <div style={{ border: "red solid 1px", padding: 16, display: "flex" }}>
      {Array.from({ length: 3 }).map((e, idx) => (
        <div key={idx.toString()} style={{ margin: 8 }}>
          <Dimple />
        </div>
      ))}
    </div>
  );
};
