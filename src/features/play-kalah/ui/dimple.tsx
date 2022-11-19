import React from "react";
import { DimpleId } from "../api/states";
import { useDimple } from "../api/useDimple";
import styles from "./dimple.module.css";
import { Marble } from "./marble";

export const Dimple = ({ id }: { id: DimpleId }) => {
  const { bucket, sow } = useDimple({ id });
  return (
    <div
      onClick={sow}
      className={styles.dimple}
      style={{
        border: "yellowgreen solid 1px",
        padding: 8,
        minHeight: "20vh",
        minWidth: "8vw",
      }}
    >
      {bucket.marbles.map((marble, idx) => (
        <div key={`${id}-${idx.toString()}`} style={{ margin: 2 }}>
          <Marble {...marble} />
        </div>
      ))}
    </div>
  );
};
