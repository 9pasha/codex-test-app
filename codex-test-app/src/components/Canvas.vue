<template>
  <div class="canvas">
    <div class="row no-gutters flex-nowrap justify-center"
    v-for="rowItm in row"
    :key="rowItm">
      <div class="canvas-col"
      v-for="colItm in col"
      :key="colItm">
        <canvas-pixel></canvas-pixel>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasPixel from "@/components/CanvasPixel";
export default {
  name: "CanvasField",
  components: {
    CanvasPixel,
  },
  data: () => ({
  }),
  computed: {
    row() {
      return this.$store.state.canvas.y;
    },
    col() {
      return this.$store.state.canvas.x;
    },
  },
};
</script>

<style scoped>
.canvas {
  width: 100%;
  overflow: auto;

  &-col {
    width: 40px;
    height: 40px;
  }
}
</style>
