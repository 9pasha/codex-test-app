<template>
  <v-container>
    <v-text-field
        label="Canvas size"
        hide-details="auto"
    ></v-text-field>
    <v-text-field
        label="Line"
        hide-details="auto"
    ></v-text-field>
    <v-text-field
        label="Rectangle"
        hide-details="auto"
    ></v-text-field>
    <v-text-field
        label="Bucket fill"
        hide-details="auto"
    ></v-text-field>
    <v-btn
        color="primary mt-5"
        elevation="2"
        large
    >
      Draw it
    </v-btn>
  </v-container>
</template>

<script>
export default {
name: "ToolForm"
}
</script>

<style scoped>

</style>
