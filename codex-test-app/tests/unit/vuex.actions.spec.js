import { actions, mutations } from "@/store";

const { createTextCanvas } = actions;
const { updateOutputText } = mutations;

describe("actions", () => {
  it("test 1 creating text copy of canvas", () => {
    const state = {
      pixels: [
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"],
        ["x", "x", "x", "x", "x"]
      ],
      canvas: { x: 5, y: 5 },
      outputImage: ""
    };

    createTextCanvas({
      state,
      commit: (name, value) => {
        updateOutputText(state, value);
      }
    });
    expect(state.outputImage).toEqual(
      "------\n" +
        "|xxxxx|\n" +
        "|xxxxx|\n" +
        "|xxxxx|\n" +
        "|xxxxx|\n" +
        "|xxxxx|\n" +
        "------\n"
    );
  });
  it("test 2 creating text copy of canvas", () => {
    const state = {
      pixels: [
        [
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "x",
          "x",
          "x",
          "x",
          "x"
        ],
        [
          "x",
          "x",
          "x",
          "x",
          "x",
          "x",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "x",
          "",
          "",
          "",
          "x"
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "x",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "x",
          "x",
          "x",
          "x",
          "x"
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "x",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o",
          "o"
        ]
      ],
      canvas: { x: 20, y: 4 },
      outputImage: ""
    };

    createTextCanvas({
      state,
      commit: (name, value) => {
        updateOutputText(state, value);
      }
    });
    expect(state.outputImage).toEqual(
      "---------------------\n" +
        "|oooooooooooooooxxxxx|\n" +
        "|xxxxxxooooooooox   x|\n" +
        "|     xoooooooooxxxxx|\n" +
        "|     xoooooooooooooo|\n" +
        "---------------------\n"
    );
  });
  it("test 3 creating text copy of canvas", () => {
    const state = {
      pixels: [
        ["", "", "", "o", "o"],
        ["", "o", "", "o", "o"],
        ["", "", "", "o", "o"],
        ["o", "o", "o", "o", "o"],
        ["o", "o", "o", "o", "o"]
      ],
      canvas: { x: 5, y: 5 },
      outputImage: ""
    };

    createTextCanvas({
      state,
      commit: (name, value) => {
        updateOutputText(state, value);
      }
    });
    expect(state.outputImage).toEqual(
      "------\n" +
        "|   oo|\n" +
        "| o oo|\n" +
        "|   oo|\n" +
        "|ooooo|\n" +
        "|ooooo|\n" +
        "------\n"
    );
  });
});
