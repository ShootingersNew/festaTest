<template>
  <v-app>
    <v-main> <game-view></game-view></v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import GameView from "./views/GameView/GameView.vue";

export default Vue.extend({
  name: "App",
  components: {
    "game-view": GameView,
  },
  data: () => ({
    //
  }),
});
</script>
