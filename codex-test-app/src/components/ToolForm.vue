<template>
  <v-container>
    <v-text-field
      label="Canvas size (ex.: x y)"
      hide-details="auto"
      v-model="canvas"
    ></v-text-field>
    <v-text-field
      label="Line (ex.: x1 y1, x2 y2; ...)"
      hide-details="auto"
      v-model="line"
    ></v-text-field>
    <v-text-field
      label="Rectangle"
      hide-details="auto"
      v-model="rect"
    ></v-text-field>
    <v-text-field
      label="Bucket fill"
      hide-details="auto"
      v-model="fillBucket"
    ></v-text-field>
    <v-btn color="primary mt-5" elevation="2" large @click="changeState">
      Draw it
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "ToolForm",
  data: () => ({
    canvas: "",
    line: "",
    rect: "",
    fillBucket: ""
  }),
  computed: {
    canvasData() {
      const reg = /\d+/gi;
      const sizeArr = this.canvas.match(reg);
      return {
        x: parseInt(sizeArr[0]),
        y: parseInt(sizeArr[1])
      };
    },
    lineData() {
      const reg = /\d+/gi;
      const coordinates = this.line.match(reg);
      const line = [];
      coordinates.forEach((el, id) => {
        if (id && id % 3 === 0) {
          line.push({
            x1: parseInt(coordinates[id - 3]),
            y1: parseInt(coordinates[id - 2]),
            x2: parseInt(coordinates[id - 1]),
            y2: parseInt(coordinates[id])
          });
        }
      });
      return line;
    }
  },
  methods: {
    changeState() {
      this.$store.commit("updateCanvas", this.canvasData);
      this.$store.commit("pushPixels", { color: "" });
      this.$store.commit("updateLine", this.lineData);
    }
  }
};
</script>

<style scoped></style>
