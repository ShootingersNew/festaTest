<template>
  <div>
    <drop-container
      :displayingImages="displayingImages"
      :images.sync="readyForUploadImages"
      @update-logs="log"
      @delete="removeFile"
    ></drop-container>
    <v-row>
      <v-col cols="5">
        Add new object
        <add-list
          @submit="submitImages"
          :images.sync="readyForUploadImages"
          @changeLog="log"
        ></add-list>
      </v-col>
      <v-col>
        Log
        <history-log :logs="logs"></history-log>
      </v-col>
    </v-row>
  </div>
</template>

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
