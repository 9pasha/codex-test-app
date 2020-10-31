import Vue from "vue";
import Vuex from "vuex";
import FileSaver from "file-saver";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    operations: [],
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
    pixels: [],
    outputImage: ""
  },
  mutations: {
    setOperations(state, value) {
      state.operations = value;
    },
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
    updateOutputText(state, value) {
      state.outputImage += value;
    },
    createCanvas(state, value) {
      for (let y = 0; y < state.canvas.y; y++) {
        const xArr = [];
        for (let x = 0; x < state.canvas.x; x++) {
          xArr.push(value.color);
        }
        state.pixels.push(xArr);
      }
    },
    drawLine(state) {
      const line = state.line[0];
      if (line.x1 === line.x2) {
        const min = Math.min(line.y1, line.y2);
        const max = Math.max(line.y1, line.y2);
        for (let y = min; y <= max; y++) {
          state.pixels[y - 1][line.x1 - 1] = "x";
        }
      } else if (line.y1 === line.y2) {
        const min = Math.min(line.x1, line.x2);
        const max = Math.max(line.x1, line.x2);
        for (let x = min; x <= max; x++) {
          state.pixels[line.y1 - 1][x - 1] = "x";
        }
      }
      state.line.shift();
    },
    drawRect(state) {
      const rect = state.rectangle[0];
      state.line.push(
        {
          x1: rect.x1,
          y1: rect.y1,
          x2: rect.x2,
          y2: rect.y1
        },
        {
          x1: rect.x2,
          y1: rect.y1,
          x2: rect.x2,
          y2: rect.y2
        },
        {
          x1: rect.x2,
          y1: rect.y2,
          x2: rect.x1,
          y2: rect.y2
        },
        {
          x1: rect.x1,
          y1: rect.y2,
          x2: rect.x1,
          y2: rect.y1
        }
      );
      this.commit("drawLine");
      this.commit("drawLine");
      this.commit("drawLine");
      this.commit("drawLine");
      state.rectangle.shift();
    },
    fillCanvas(state, value) {
      if (
        state.pixels[value.y - 1] &&
        state.pixels[value.y - 1][value.x - 1] &&
        state.pixels[value.y - 1][value.x - 1] !== value.currPixelColor
      ) {
        return 0;
      } else if (
        value.x <= state.canvas.x &&
        value.y <= state.canvas.y &&
        value.x > 0 &&
        value.y > 0 &&
        state.pixels[value.y - 1][value.x - 1] === value.currPixelColor
      ) {
        state.pixels[value.y - 1][value.x - 1] = value.color;
        this.commit("fillCanvas", {
          color: value.color,
          x: value.x + 1,
          y: value.y,
          currPixelColor: value.currPixelColor
        });
        this.commit("fillCanvas", {
          color: value.color,
          x: value.x,
          y: value.y + 1,
          currPixelColor: value.currPixelColor
        });
        this.commit("fillCanvas", {
          color: value.color,
          x: value.x - 1,
          y: value.y,
          currPixelColor: value.currPixelColor
        });
        this.commit("fillCanvas", {
          color: value.color,
          x: value.x,
          y: value.y - 1,
          currPixelColor: value.currPixelColor
        });
      }
    }
  },
  actions: {
    draw(context) {
      context.state.operations.forEach(operation => {
        switch (operation) {
          case "C":
            context.commit("createCanvas", { color: "" });
            context.dispatch("createTextCanvas");
            break;
          case "L":
            context.commit("drawLine");
            context.dispatch("createTextCanvas");
            break;
          case "R":
            context.commit("drawRect");
            context.dispatch("createTextCanvas");
            break;
          case "B":
            context.commit("fillCanvas", {
              ...context.state.fillBucket[0],
              currPixelColor:
                context.state.pixels[context.state.fillBucket[0].y - 1][
                  context.state.fillBucket[0].x - 1
                ]
            });
            context.state.fillBucket.shift();
            context.dispatch("createTextCanvas");
            break;
        }
      });
      context.dispatch("saveTextFile", context.state.outputImage.split(""));
    },
    createTextCanvas(context) {
      let image = "";
      const maxX = context.state.pixels[0].length;
      image += "-".repeat(maxX + 1);
      context.state.pixels.forEach((y, yId) => {
        image += "\n";
        y.forEach((x, xId) => {
          if (xId === 0) {
            image += "|";
          }
          image += context.state.pixels[yId][xId] || " ";
          if (xId === maxX - 1) {
            image += "|";
          }
        });
      });
      image += "\n" + "-".repeat(maxX + 1) + "\n";
      context.commit("updateOutputText", image);
    },
    saveTextFile(context, data) {
      const blob = new Blob(data, {
        type: "text/plain;charset=utf-8"
      });
      FileSaver.saveAs(blob, "output.txt");
    }
  }
});
