<template>
  <div class="canvas-px">{{ color }}</div>
</template>

<script>
export default {
  name: "CanvasPixel",
  props: {
    x: Number,
    y: Number
  },
  computed: {
    color() {
      return this.$store.state.pixels[this.y - 1][this.x - 1];
    }
  }
};
</script>

<style scoped>
.canvas-px {
  width: 45px;
  height: 45px;
  border: 1px solid dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
