import React from "react";
import { MarbleView } from "../api/states";

export const Marble = ({ color = "blue" }: MarbleView) => {
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "20px",
        height: "2vh",
        width: "2vw",
      }}
    ></div>
  );
};
