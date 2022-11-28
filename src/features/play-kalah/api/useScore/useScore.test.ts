import { act, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useScore } from ".";
import { useDimple } from "../useDimple";

describe("useScore", () => {
  test("default", () => {
    const { result } = renderHook(
      () => {
        return useScore();
      },
      {
        wrapper: RecoilRoot,
      }
    );
    expect(result.current.opponentsPoint).toBe(0);
    expect(result.current.yourPoint).toBe(0);
  });

  test("after sow", () => {
    const sowingDimpleId = "opponentsDimple0";
    const { result } = renderHook(
      () => {
        return { score: useScore(), dimple: useDimple({ id: sowingDimpleId }) };
      },
      {
        wrapper: RecoilRoot,
      }
    );
    act(() => {
      result.current.dimple.sow();
    });
    console.log(result.current.score);
    expect(result.current.score.opponentsPoint).toStrictEqual(1);
    expect(result.current.score.yourPoint).toStrictEqual(0);
  });
});
