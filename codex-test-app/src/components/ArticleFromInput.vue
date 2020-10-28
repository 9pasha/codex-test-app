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
      const reg = /C \d+ \d+/gi;
      return this.text.match(reg).join("; ");
    },
    line() {
      const reg = /L \d+ \d+ \d+ \d+/gi;
      return this.text.match(reg).join("; ");
    },
    rectangle() {
      const reg = /R \d+ \d+ \d+ \d+/gi;
      return this.text.match(reg).join("; ");
    },
    fillBucket() {
      const reg = /B \d+ \d+ \w/gi;
      return this.text.match(reg).join("; ");
    }
  }
}
</script>

<style scoped>

</style>
