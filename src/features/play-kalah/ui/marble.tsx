import React from "react";

export const Marble = ({ color = "blue" }: { color?: string }) => {
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
