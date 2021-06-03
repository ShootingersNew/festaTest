<template>
  <v-app>
    <v-main class="app">
      <v-container class="app__container">
        <game-view></game-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
@media screen and (min-width: 1264px) {
  .app__container {
    max-width: 1200px;
    padding: 0;
  }
}
</style>
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
