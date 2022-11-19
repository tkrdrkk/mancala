import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useDimple } from "./useDimple";

describe("useDimple", () => {
  test("default", () => {
    const id = "yourDimple0";
    const { result } = renderHook(() => useDimple({ id }), {
      wrapper: RecoilRoot,
    });
    expect(result.current.bucket.marbles).toStrictEqual([
      { color: "blue" },
      { color: "blue" },
      { color: "blue" },
    ]);
  });

  test("sow", () => {
    const sowingDimpleId = "yourDimple0";
    const infectedDimpleIds = ["yourDimple1", "yourDimple2"];
  });
});
