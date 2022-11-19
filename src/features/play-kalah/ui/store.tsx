import React from "react";
import { Owner } from "../api/states";
import { useStore } from "../api/useStore";
import { Marble } from "./marble";

export const Store = ({ owner }: { owner: Owner }) => {
  const { marbles } = useStore({ id: `${owner}Store` });
  return (
    <div
      style={{
        border: "grey solid 1px",
        padding: 8,
        minWidth: "10vw",
        height: "100%",
      }}
    >
      {marbles.map((marble, idx) => {
        return <Marble key={`${owner}Marble${idx.toString()}`} {...marble} />;
      })}
    </div>
  );
};
