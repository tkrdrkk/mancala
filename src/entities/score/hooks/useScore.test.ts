import { act, renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useScore } from "./useScore";

describe("useScore", () => {
  test("increment", () => {
    const { result } = renderHook(() => useScore(), { wrapper: RecoilRoot });
    expect(result.current.yourScore.totalPoint).toBe(0);
    expect(result.current.opponentsScore.totalPoint).toBe(0);
    act(() => result.current.addYourScore(10));
    act(() => result.current.addOpponentsScore(20));
    expect(result.current.yourScore.totalPoint).toBe(10);
    expect(result.current.opponentsScore.totalPoint).toBe(20);
  });
  test("increment error", () => {
    const { result } = renderHook(() => useScore(), { wrapper: RecoilRoot });
    expect(result.current.yourScore.totalPoint).toBe(0);
    expect(result.current.opponentsScore.totalPoint).toBe(0);
    expect(() => {
      result.current.addYourScore(-10);
    }).toThrowError();
    expect(() => {
      result.current.addOpponentsScore(-10);
    }).toThrowError();
  });
});
