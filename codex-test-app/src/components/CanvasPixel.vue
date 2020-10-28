<template>
  <div class="canvas-px">

  </div>
</template>

<script>
export default {
name: "CanvasPixel",
  computed: {
    color() {
      return this.$store.state.fillBucket
    }
  },
}
</script>

<style scoped>
.canvas-px {
  width: 40px;
  height: 40px;
  border: 1px solid dodgerblue;
}
</style>
