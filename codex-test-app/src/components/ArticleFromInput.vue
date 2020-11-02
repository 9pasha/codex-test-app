<template>
  <v-container>
    <p>
      Canvas size: <span class="indigo--text">{{ canvasSize }}</span>
    </p>
    <p>
      Line: <span class="indigo--text">{{ line }}</span>
    </p>
    <p>
      Rectangle: <span class="indigo--text">{{ rectangle }}</span>
    </p>
    <p>
      Bucket fill: <span class="indigo--text">{{ fillBucket }}</span>
    </p>
    <v-btn
      class="save-button"
      color="primary mt-5"
      elevation="2"
      large
      @click="saveImage"
    >
      Save to .txt
    </v-btn>
  </v-container>
</template>

<script>
import Input from "!raw-loader!../../../input.txt";

export default {
  name: "ArticleFromInput",
  data: () => ({
    text: Input
  }),
  methods: {
    saveImage() {
      this.$store.dispatch(
        "saveTextFile",
        this.$store.state.outputImage.split("")
      );
    }
  },
  mounted() {
    this.text += "\n";
    let optionsArr = this.text.split(/\n/);
    optionsArr = optionsArr.map(option => {
      if (option.match(/C \d+ \d+/)) return option.match(/C \d+ \d+/)[0][0];
      if (option.match(/L \d+ \d+ \d+ \d+/))
        return option.match(/L \d+ \d+ \d+ \d+/)[0][0];
      if (option.match(/R \d+ \d+ \d+ \d+/))
        return option.match(/R \d+ \d+ \d+ \d+/)[0][0];
      if (option.match(/B \d+ \d+ \w/))
        return option.match(/B \d+ \d+ \w/)[0][0];
    });
    if (
      optionsArr[0] === "C" &&
      this.$store.state.canvas.x > 2 &&
      this.$store.state.canvas.y > 2
    ) {
      this.$store.commit("updateIsCorrectCanvas", true);
      this.$store.commit("setOperations", optionsArr);
      this.$store.dispatch("draw");
    }
  },
  computed: {
    isCorrectCanvas() {
      return this.$store.state.isCorrectCanvas;
    },
    canvasSize() {
      const reg = /C \d+ \d+/i;
      const elements = this.text.match(reg);
      if (elements) {
        const canvasData = elements[0].split(" ");
        this.$store.commit("updateCanvas", {
          x: parseInt(canvasData[1]),
          y: parseInt(canvasData[2])
        });
        return elements.join("; ");
      }
      return "";
    },
    line() {
      const reg = /L \d+ \d+ \d+ \d+/gi;
      const elements = this.text.match(reg) || [];
      const value = [];
      elements.forEach(el => {
        const newEl = el.split(" ");
        value.push({
          x1: parseInt(newEl[1]),
          y1: parseInt(newEl[2]),
          x2: parseInt(newEl[3]),
          y2: parseInt(newEl[4])
        });
      });
      this.$store.commit("updateLine", value);
      return elements.join("; ");
    },
    rectangle() {
      const reg = /R \d+ \d+ \d+ \d+/gi;
      const elements = this.text.match(reg) || [];
      const value = [];
      elements.forEach(el => {
        const newEl = el.split(" ");
        value.push({
          x1: parseInt(newEl[1]),
          y1: parseInt(newEl[2]),
          x2: parseInt(newEl[3]),
          y2: parseInt(newEl[4])
        });
      });
      this.$store.commit("updateRect", value);
      return elements.join("; ");
    },
    fillBucket() {
      const reg = /B \d+ \d+ \w/gi;
      const elements = this.text.match(reg) || [];
      const value = [];
      elements.forEach(el => {
        const newEl = el.split(" ");
        value.push({
          x: parseInt(newEl[1]),
          y: parseInt(newEl[2]),
          color: newEl[3]
        });
      });
      this.$store.commit("updateFillBucket", value);
      return elements.join("; ");
    }
  }
};
</script>
