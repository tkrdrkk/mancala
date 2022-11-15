import React from "react";
import { Store } from "./store";
import { Territory } from "./territory";

export const Field = () => {
  return (
    <div style={{ border: "skyblue solid 1px", padding: 16, display: "flex" }}>
      <div style={{ margin: "8px" }}>
        <Store />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ margin: "8px 0px" }}>
          <Territory />
        </div>
        <div style={{ margin: "8px 0px" }}>
          <Territory />
        </div>
      </div>
      <div style={{ margin: "8px" }}>
        <Store />
      </div>
    </div>
  );
};
