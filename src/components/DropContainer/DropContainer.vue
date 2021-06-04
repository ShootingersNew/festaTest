<template>
  <div class="dropContainer" @dragover.prevent @drop.prevent>
    <div class="dropContainer__title">Container A</div>
    <div
      class="dropContainer__container"
      @dragleave="fileDragOut"
      @dragover="fileDragIn"
      @drop="handleFileDrop"
      v-bind:style="{ 'background-color': color }"
    >
      <div
        class="dropContainer__imageContainer d-inline-block"
        :key="file.lastModified + file.size"
        v-for="(file, idx) in displayingImages"
      >
        <v-btn
          class="dropContainer__deleteButton"
          icon
          @click="deleteButtonClick(idx)"
        >
          <v-icon>mdi-close</v-icon></v-btn
        >
        <img class="dropContainer__image" :src="urlFromFile(file)" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
/* todo containers color */
.dropContainer__container {
  width: 100%;
  min-height: 500px;
  position: relative;
  background-color: #eeeeee;
  border: 2px solid #888888;
}
.dropContainer__title {
  font-size: 1.5em;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: 1.75rem;
  margin: 0.67em 0;
  color: #888888;
}
.dropContainer__imageContainer {
  width: 128px;
  height: 128px;
  position: relative;
}
.dropContainer__deleteButton {
  position: absolute;
  right: 0;
  top: 0;
}
.dropContainer__image {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.dropContainer__deleteButton {
  position: absolute;
  right: 0;
}
</style>
<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import EventModel from "@/models/EventModel";
@Component({
  name: "DropContainer",
})
export default class DropContainer extends Vue {
  @Prop({ default: [] }) images: File[];
  @Prop({ default: [] }) displayingImages: File[];
  color = "#EEEEEE";
  get files(): File[] {
    return this.images;
  }
  set files(newArr: File[]) {
    this.$emit("update:images", newArr);
  }
  urlFromFile(img: File): string {
    return URL.createObjectURL(img);
  }
  handleFileDrop(e: DragEvent): void {
    const droppedFiles = e.dataTransfer?.files;
    if (!droppedFiles) return;
    const filesArr = [];
    for (let idx = 0; idx < droppedFiles.length; idx++) {
      filesArr.push(droppedFiles[idx]);
    }
    this.files = [
      ...this.files,
      ...filesArr.filter((x) => x.type.search(/image/) !== -1),
    ];
    filesArr.forEach((item) => {
      this.$emit(
        "update-logs",
        new EventModel({
          type: "loaded",
          target: "Container 1",
          file: item.name,
          date: new Date(),
        })
      );
    });
  }
  deleteButtonClick(fileKey: number): void {
    this.$emit("delete", fileKey);
  }
  fileDragIn(): void {
    this.color = "white";
  }
  fileDragOut(): void {
    this.color = "#EEEEEE";
  }
}
</script>
