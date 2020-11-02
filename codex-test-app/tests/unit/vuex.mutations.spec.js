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
  it("check draw rect function", () => {
    const state = {
      pixels: [],
      canvas: { x: 5, y: 5 },
      line: [],
      rectangle: [
        { x1: 1, y1: 1, x2: 3, y2: 3 },
        { x1: 4, y1: 4, x2: 5, y2: 5 }
      ]
    };
    const thisObj = {
      commit: function() {
        drawLine(state);
      }
    };

    createCanvas(state, { color: "o" });
    drawRect.call(thisObj, state);
    drawRect.call(thisObj, state);
    expect(state.pixels).toEqual([
      ["x", "x", "x", "o", "o"],
      ["x", "o", "x", "o", "o"],
      ["x", "x", "x", "o", "o"],
      ["o", "o", "o", "x", "x"],
      ["o", "o", "o", "x", "x"]
    ]);
  });
  it("check fill canvas function", () => {
    const state = {
      pixels: [],
      canvas: { x: 5, y: 5 },
      line: [],
      rectangle: [{ x1: 1, y1: 1, x2: 3, y2: 3 }],
      fillBucket: []
    };
    const thisObj = {
      commit: function() {
        drawLine(state);
      }
    };
    const fillCanvasObj = {
      commit: function(name, value) {
        fillCanvas.call(fillCanvasObj, state, value);
      }
    };

    createCanvas(state, { color: "o" });
    drawRect.call(thisObj, state);
    fillCanvas.call(fillCanvasObj, state, {
      x: 1,
      y: 1,
      color: "",
      currPixelColor: "x"
    });
    expect(state.pixels).toEqual([
      ["", "", "", "o", "o"],
      ["", "o", "", "o", "o"],
      ["", "", "", "o", "o"],
      ["o", "o", "o", "o", "o"],
      ["o", "o", "o", "o", "o"]
    ]);
  });
});
