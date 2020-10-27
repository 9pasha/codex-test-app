<template>
  <v-container>
    Canvas
    <canvas-pixel></canvas-pixel>
  </v-container>
</template>

<script>
import CanvasPixel from "@/components/CanvasPixel";
export default {
  name: "CanvasField",
  components: {
    CanvasPixel,
  },
  data: () => ({
  })
};
</script>
