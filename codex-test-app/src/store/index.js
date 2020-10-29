import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    canvas: {
      x: 0,
      y: 0
    },
    line: [
      {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      }
    ],
    rectangle: [
      {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      }
    ],
    fillBucket: [
      {
        x: 0,
        y: 0,
        color: ""
      }
    ],
    pixels: []
  },
  mutations: {
    updateCanvas(state, value) {
      state.canvas = value;
    },
    updateLine(state, value) {
      state.line = value;
    },
    updateRect(state, value) {
      state.rectangle = value;
    },
    updateFillBucket(state, value) {
      state.fillBucket = value;
    },
    updatePixel(state, value) {
      state.pixels[value.y - 1][value.x - 1] = value.color;
    },
    pushPixels(state, value) {
      for (let y = 0; y < state.canvas.y; y++) {
        const xArr = [];
        for (let x = 0; x < state.canvas.x; x++) {
          xArr.push(value.color);
        }
        state.pixels.push(xArr);
      }
    },
    pushDefaultPixels(state) {
      state.line.forEach(line => {
        state.pixels[line.y1 - 1][line.x1 - 1] = "x";
        state.pixels[line.y2 - 1][line.x2 - 1] = "x";
      });
    }
  }
});
