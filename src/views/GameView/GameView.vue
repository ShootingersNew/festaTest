<template>
  <div>
    <drop-container :images.sync="images"></drop-container>
    <v-row>
      <v-col cols="5">
        Add new object
        <add-list
          @submit="submitImages"
          :images.sync="readyForUploadImages"
        ></add-list>
      </v-col>
      <v-col>
        Log
        <history-log></history-log>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import AddList from "@/components/AddList/AddList.vue";
import HistoryLog from "@/components/HistoryLog/HistoryLog.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import DropContainer from "../../components/DropContainer/DropContainer.vue";
@Component({
  name: "GameView",
  components: {
    "drop-container": DropContainer,
    "add-list": AddList,
    "history-log": HistoryLog,
  },
})
class GameView extends Vue {
  images: File[] = [];
  readyForUploadImages: File[] = [];
  submitImages(): void {
    this.images = [...this.images, ...this.readyForUploadImages];
    this.readyForUploadImages = [];
  }
}
export default GameView;
</script>
