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
        <img class="dropContainer__image" :src="urlFromFile(file)" alt="" />
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
@Component({
  name: "DropContainer",
})
export default class DropContainer extends Vue {
  @Prop({ default: [] }) images: File[];
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
    [...droppedFiles].forEach((f) => {
      this.files.push(f);
      this.$nextTick;
      console.log(this.files);
    });
  }
  removeFile(fileKey: number): void {
    this.files = this.files.filter((item, idx) => idx !== fileKey);
  }
  fileDragIn(): void {
    this.color = "white";
  }
  fileDragOut(): void {
    this.color = "#EEEEEE";
  }
}
</script>
