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
        class="dropContainer__imageContainer float-left"
        :key="idx"
        v-for="(file, idx) in files"
      >
        <v-btn icon @click="removeFile(idx)"> <v-icon>mdi-close</v-icon></v-btn>
        <img class="dropContainer__image" :src="file.url" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
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
</style>
<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import FileWithUrlModel from "../../models/FileWithUrlModel";
@Component({
  name: "DropContainer",
})
export default class DropContainer extends Vue {
  @Prop({ default: [] }) images: FileWithUrlModel[];
  color = "#EEEEEE";
  get files(): FileWithUrlModel[] {
    return this.images;
  }
  set files(newArr: FileWithUrlModel[]) {
    this.$emit("update:images", newArr);
  }
  handleFileDrop(e: DragEvent): void {
    let droppedFiles = e.dataTransfer?.files;
    if (!droppedFiles) return;
    [...droppedFiles].forEach((f) => {
      this.files.push({ ...f, url: URL.createObjectURL(f) });
    });
  }
  removeFile(fileKey: number): void {
    this.files = [...this.files].filter((item, idx) => idx !== fileKey);
  }
  fileDragIn(): void {
    this.color = "white";
  }
  fileDragOut(): void {
    this.color = "#EEEEEE";
  }
}
</script>
