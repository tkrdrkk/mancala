import React from "react";
import { Field } from "./field";
import { Store } from "./store";

// HACK Territory概念をコンポーネントに落としこむ脳がない。自分と相手で配置が違うのでしょうがないと考えるか…
export const Board = () => {
  return (
    <div style={{ border: "black solid 1px", padding: 16 }}>
      <div
        style={{ border: "skyblue solid 1px", padding: 16, display: "flex" }}
      >
        <div style={{ margin: "8px" }}>
          <Store owner="opponents" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ margin: "8px 0px" }}>
            <Field owner="opponents" />
          </div>
          <div style={{ margin: "8px 0px" }}>
            <Field owner="your" />
          </div>
        </div>
        <div style={{ margin: "8px" }}>
          <Store owner="your" />
        </div>
      </div>
    </div>
  );
};
