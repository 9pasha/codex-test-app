import { mutations } from "@/store";

const { createCanvas, drawLine, drawRect, fillCanvas } = mutations;

describe("mutations", () => {
  it("create empty canvas", () => {
    const state = { pixels: [], canvas: { x: 5, y: 5 } };

    createCanvas(state, { color: "" });
    expect(state.pixels).toEqual([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""]
    ]);
  });
  it("create canvas with 'x'", () => {
    const state = { pixels: [], canvas: { x: 5, y: 5 } };

    createCanvas(state, { color: "x" });
    expect(state.pixels).toEqual([
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"],
      ["x", "x", "x", "x", "x"]
    ]);
  });
  it("create canvas with 'o'", () => {
    const state = { pixels: [], canvas: { x: 5, y: 5 } };

    createCanvas(state, { color: "o" });
    expect(state.pixels).toEqual([
      ["o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o"]
    ]);
  });
  it("check draw line function", () => {
    const state = {
      pixels: [],
      canvas: { x: 5, y: 5 },
      line: [{ x1: 2, y1: 2, x2: 2, y2: 5 }]
    };

    createCanvas(state, { color: "o" });
    drawLine(state);
    expect(state.pixels).toEqual([
      ["o", "o", "o", "o", "o"],
      ["o", "x", "o", "o", "o"],
      ["o", "x", "o", "o", "o"],
      ["o", "x", "o", "o", "o"],
      ["o", "x", "o", "o", "o"]
    ]);
  });
  // it("check draw rect function", () => {
  //   const state = {
  //     pixels: [],
  //     canvas: { x: 5, y: 5 },
  //     line: [{ x1: 2, y1: 2, x2: 2, y2: 5 }]
  //   };
  //
  //   createCanvas(state, { color: "o" });
  //   drawLine(state);
  //   expect(state.pixels).toEqual([
  //     ["o", "o", "o", "o", "o"],
  //     ["o", "x", "o", "o", "o"],
  //     ["o", "x", "o", "o", "o"],
  //     ["o", "x", "o", "o", "o"],
  //     ["o", "x", "o", "o", "o"]
  //   ]);
  // });
  // it("check fill canvas function", () => {
  //   const state = {
  //     pixels: [],
  //     canvas: { x: 5, y: 5 },
  //     line: [
  //       { x1: 2, y1: 2, x2: 2, y2: 5 },
  //       { x1: 1, y1: 2, x2: 4, y2: 2 }
  //     ]
  //   };
  //
  //   createCanvas(state, { color: "o" });
  //   drawLine(state);
  //   drawLine(state);
  //   fillCanvas(state, { x: 1, y: 4, color: "", currPixelColor: "o" });
  //   expect(state.pixels).toEqual([
  //     ["o", "o", "o", "o", "o"],
  //     ["x", "x", "x", "x", "o"],
  //     ["", "x", "o", "o", "o"],
  //     ["", "x", "o", "o", "o"],
  //     ["", "x", "o", "o", "o"]
  //   ]);
  // });
});
