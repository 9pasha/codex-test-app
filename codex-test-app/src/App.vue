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
          <v-col cols="12" md="3">
            <v-sheet rounded="lg" min-height="268">
              <article-from-input></article-from-input>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="7">
            <v-sheet min-height="70vh" rounded="lg">
              <canvas-field></canvas-field>
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

export default {
  name: "App",
  components: {
    ArticleFromInput,
    CanvasField
  },
  data: () => ({
    //
  })
};
</script>
