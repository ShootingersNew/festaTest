<template>
  <div class="gameView">
    <drop-container
      :displayingImages="displayingImages"
      :images.sync="readyForUploadImages"
      @update-logs="log"
      @delete="removeFile"
    ></drop-container>
    <v-row class="gameView__actions">
      <v-col cols="5">
        <div class="gameView__title">Add new object</div>
        <div class="gameView__actionFrame">
          <add-list
            @submit="submitImages"
            :images.sync="readyForUploadImages"
            @changeLog="log"
          ></add-list>
        </div>
      </v-col>
      <v-col>
        <div class="gameView__title">Log</div>
        <div class="gameView__actionFrame">
          <history-log :logs="logs"></history-log>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.gameView__actions {
  margin-top: 64px;
}
.gameView__title {
  font-size: 1.5em;
  color: #888888;
  margin-bottom: 10px;
}
</style>
<script lang="ts">
import AddList from "@/components/AddList/AddList.vue";
import HistoryLog from "@/components/HistoryLog/HistoryLog.vue";
import EventModel from "@/models/EventModel";
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
  displayingImages: File[] = [];
  readyForUploadImages: File[] = [];
  logs: EventModel[] = [];
  submitImages(): void {
    this.displayingImages = [
      ...this.displayingImages,
      ...this.readyForUploadImages,
    ];
    this.readyForUploadImages.forEach((img) => {
      this.log(
        new EventModel({
          date: new Date(),
          file: img.name,
          target: "Container 1",
          type: "added",
        })
      );
    });
    this.readyForUploadImages = [];
  }
  removeFile(fileKey: number): void {
    const file = this.displayingImages.splice(fileKey, 1);
    this.log(
      new EventModel({
        date: new Date(),
        file: file[0].name,
        target: "Container 1",
        type: "deleted",
      })
    );
  }
  log(imageEvent: EventModel): void {
    this.logs.push({ ...imageEvent, id: this.logs.length + 1 });
  }
}
export default GameView;
</script>
