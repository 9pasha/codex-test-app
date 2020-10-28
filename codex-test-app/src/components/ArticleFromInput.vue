<template>
  <v-container>
    <p>Canvas size: <span class="indigo--text">{{ canvasSize }}</span></p>
    <p>Line: <span class="indigo--text">{{ line }}</span></p>
    <p>Rectangle: <span class="indigo--text">{{ rectangle }}</span></p>
    <p>Bucket fill: <span class="indigo--text">{{ fillBucket }}</span></p>
  </v-container>
</template>

<script>
import Input from "!raw-loader!../../../input.txt";
export default {
  name: "ArticleFromInput",
  data: () => ({
    text: Input,
  }),
  computed: {
    canvasSize() {
      const reg = /C \d+ \d+/i;
      const elements = this.text.match(reg);
      const canvasData = elements[0].split(" ");
      this.$store.commit("updateCanvas", {
        x: parseInt(canvasData[1]),
        y: parseInt(canvasData[2]),
      });
      return elements.join("; ");
    },
    line() {
      const reg = /L \d+ \d+ \d+ \d+/gi;
      const elements = this.text.match(reg);
      const value = [];
      elements.forEach((el) => {
        const newEl = el.split(" ");
        value.push({
          x1: parseInt(newEl[1]),
          y1: parseInt(newEl[2]),
          x2: parseInt(newEl[3]),
          y2: parseInt(newEl[4]),
        });
      });
      this.$store.commit("updateLine", value);
      return elements.join("; ");
    },
    rectangle() {
      const reg = /R \d+ \d+ \d+ \d+/gi;
      const elements = this.text.match(reg);
      const value = [];
      elements.forEach((el) => {
        const newEl = el.split(" ");
        value.push({
          x1: parseInt(newEl[1]),
          y1: parseInt(newEl[2]),
          x2: parseInt(newEl[3]),
          y2: parseInt(newEl[4]),
        });
      });
      this.$store.commit("updateRect", value);
      return elements.join("; ");
    },
    fillBucket() {
      const reg = /B \d+ \d+ \w/gi;
      const elements = this.text.match(reg);
      const value = [];
      elements.forEach((el) => {
        const newEl = el.split(" ");
        value.push({
          x1: parseInt(newEl[1]),
          y1: parseInt(newEl[2]),
          color: newEl[3],
        });
      });
      this.$store.commit("updateFillBucket", value);
      return elements.join("; ");
    }
  }
}
</script>

<style scoped>

</style>
