<template>
  <v-container>
    {{ text }}
  </v-container>
</template>

<script>
import Input from "!raw-loader!../../../input.txt";
export default {
  name: "ArticleFromInput",
  data: () => ({
    text: Input,
  }),
  methods: {
  },
}
</script>

<style scoped>

</style>
