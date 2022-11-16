import { renderHook } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useBoardView } from "./useBoardView";

describe("useBoardView", () => {
  test("default", () => {
    const { result } = renderHook(() => useBoardView(), {
      wrapper: RecoilRoot,
    });
    expect(result.current.boardView.yourTerritory.store.marbles).toStrictEqual(
      []
    );
    expect(
      result.current.boardView.opponentsTerritory.store.marbles
    ).toStrictEqual([]);

    // expect(defaultBucketsAtom).toStrictEqual([{}]);

    // expect(convertToMarbleLocations(result.current.boardView)).toStrictEqual([
    //   {
    //     id: "yourStore",
    //     nextId: "opponentsDimple3",
    //     storage: { marbles: [] },
    //   },
    //   {
    //     id: "opponentsDimple3",
    //     nextId: "opponentsDimple2",
    //     storage: {
    //       marbles: [
    //         { id: "opponentsMarble-3-1", color: "blue" },
    //         { id: "opponentsMarble-3-2", color: "blue" },
    //         { id: "opponentsMarble-3-3", color: "blue" },
    //       ],
    //     },
    //   },
    //   {
    //     id: "opponentsDimple2",
    //     nextId: "opponentsDimple1",
    //     storage: {
    //       marbles: [
    //         { id: "opponentsMarble-2-1", color: "blue" },
    //         { id: "opponentsMarble-2-2", color: "blue" },
    //         { id: "opponentsMarble-2-3", color: "blue" },
    //       ],
    //     },
    //   },
    //   {
    //     id: "opponentsDimple1",
    //     nextId: "opponentsStore",
    //     storage: {
    //       marbles: [
    //         { id: "opponentsMarble-1-1", color: "blue" },
    //         { id: "opponentsMarble-1-2", color: "blue" },
    //         { id: "opponentsMarble-1-3", color: "blue" },
    //       ],
    //     },
    //   },
    //   {
    //     id: "opponentsStore",
    //     nextId: "yourDimple1",
    //     storage: { marbles: [] },
    //   },
    //   {
    //     id: "yourDimple1",
    //     nextId: "yourDimple2",
    //     storage: {
    //       marbles: [
    //         { id: "opponentsMarble-1-1", color: "blue" },
    //         { id: "opponentsMarble-1-2", color: "blue" },
    //         { id: "opponentsMarble-1-3", color: "blue" },
    //       ],
    //     },
    //   },
    //   {
    //     id: "yourDimple2",
    //     nextId: "yourDimple3",
    //     storage: {
    //       marbles: [
    //         { id: "opponentsMarble-2-1", color: "blue" },
    //         { id: "opponentsMarble-2-2", color: "blue" },
    //         { id: "opponentsMarble-2-3", color: "blue" },
    //       ],
    //     },
    //   },
    //   {
    //     id: "yourDimple3",
    //     nextId: "yourStore",
    //     storage: {
    //       marbles: [
    //         { id: "opponentsMarble-3-1", color: "blue" },
    //         { id: "opponentsMarble-3-2", color: "blue" },
    //         { id: "opponentsMarble-3-3", color: "blue" },
    //       ],
    //     },
    //   },
    // ]);

    // TODO sow
  });
});
