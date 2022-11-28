import React from "react";
import { useScore } from "../api/useScore";

export const ScoreBoard = () => {
  const score = useScore();
  return (
    <div>
      <div>Score</div>
      {score.settled && <div>{`Winner: ${score.winner}`}</div>}
      <div>{`Your Point: ${score.yourPoint}`}</div>
      <div>{`Opponent's Point: ${score.opponentsPoint}`}</div>
    </div>
  );
};
