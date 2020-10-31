<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab>
          Paint blocks
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <article-from-input></article-from-input>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <canvas-field v-if="isCorrectCanvas"></canvas-field>
              <h2 v-if="canvasErr" class="red--text text-center">
                {{ canvasErr }}
              </h2>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <tool-form></tool-form>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ArticleFromInput from "@/components/ArticleFromInput";
import CanvasField from "@/components/Canvas";
import ToolForm from "@/components/ToolForm";

export default {
  name: "App",
  components: {
    ArticleFromInput,
    CanvasField,
    ToolForm
  },
  data: () => ({
    //
  }),
  computed: {
    isCorrectCanvas() {
      return (
        this.$store.state.operations[0] === "C" &&
        this.$store.state.canvas.x > 2 &&
        this.$store.state.canvas.y > 2
      );
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
