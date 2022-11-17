import { act, renderHook } from "@testing-library/react";
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
    act(() =>
      result.current.sow(
        result.current.boardView.yourTerritory.field.dimples[0].id
      )
    );

    // 指定したバケツが空か
    expect(
      result.current.boardView.yourTerritory.field.dimples[0].marbles
    ).toHaveLength(0);

    // 指定したバケツの右隣3つに石が1つずつ増えているか
    expect(
      result.current.boardView.yourTerritory.field.dimples[1].marbles
    ).toHaveLength(4);
    expect(
      result.current.boardView.yourTerritory.field.dimples[2].marbles
    ).toHaveLength(4);
    expect(
      result.current.boardView.yourTerritory.field.dimples[3].marbles
    ).toHaveLength(4);

    // 前段で増えたバケツを指定して再度sow
    act(() =>
      result.current.sow(
        result.current.boardView.yourTerritory.field.dimples[2].id
      )
    );
    expect(
      result.current.boardView.yourTerritory.field.dimples[2].marbles
    ).toHaveLength(0);

    expect(
      result.current.boardView.yourTerritory.field.dimples[3].marbles
    ).toHaveLength(5);
    expect(
      result.current.boardView.yourTerritory.field.dimples[4].marbles
    ).toHaveLength(4);
    expect(
      result.current.boardView.yourTerritory.field.dimples[5].marbles
    ).toHaveLength(4);

    // 配列の末尾から頭に戻っていることを確認
    expect(result.current.boardView.yourTerritory.store.marbles).toHaveLength(
      1
    );
  });
});
