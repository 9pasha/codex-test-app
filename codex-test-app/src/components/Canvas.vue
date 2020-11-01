<template>
  <div class="canvas">
    <div class="wrapper" v-if="isCorrectCanvas">
      <div
        class="row no-gutters flex-nowrap justify-center"
        v-for="rowItm in row"
        :key="rowItm"
      >
        <div class="canvas-col" v-for="colItm in col" :key="colItm">
          <canvas-pixel :y="rowItm" :x="colItm"></canvas-pixel>
        </div>
      </div>
    </div>

    <h2 v-if="canvasErr" class="red--text text-center">
      {{ canvasErr }}
    </h2>
  </div>
</template>

<script>
import CanvasPixel from "@/components/CanvasPixel";
export default {
  name: "CanvasField",
  components: {
    CanvasPixel
  },
  computed: {
    row() {
      return this.$store.state.canvas.y;
    },
    col() {
      return this.$store.state.canvas.x;
    },
    isCorrectCanvas() {
      return this.$store.state.isCorrectCanvas;
    },
    canvasErr() {
      if (!this.isCorrectCanvas) {
        return "Sorry, canvas can't be created. At first line of input.txt you need to create canvas(C x y) and set min-size: 2x2.";
      }
      return "";
    }
  }
};
</script>

<style scoped>
.canvas {
  width: 100%;
  overflow: auto;

  &-col {
    width: 45px;
    height: 45px;
  }
}
</style>
