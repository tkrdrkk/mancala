import React from "react";
import { MarbleView } from "../api/states";

export const Marble = ({ color = "blue" }: MarbleView) => (
  <div
    style={{
      backgroundColor: color,
      borderRadius: "20px",
      height: "24px",
      width: "32px",
      border: "1px solid black",
    }}
  />
);
