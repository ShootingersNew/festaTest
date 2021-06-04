<template>
  <v-row>
    <v-col>
      <v-list>
        <v-list-item :key="item.id" v-for="item in files">
          {{ item.name }}
          <v-list-item-action>
            <v-icon v-if="!active" color="grey lighten-1">
              mdi-star-outline
            </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col>
      <v-btn @click="selectFiles">Select Image</v-btn>
      <input
        @change="uploadHandler"
        hidden
        ref="fileInput"
        type="file"
        name="file-input"
        multiple="True"
        accept="image/*"
      />
      <v-btn @click="submit">ADD OBJECT</v-btn>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component({
  name: "AddList",
})
class AddList extends Vue {
  @Prop({ default: [] }) images: File[];
  get files(): File[] {
    return this.images;
  }
  set files(newFiles: File[]) {
    this.$emit("update:images", newFiles);
  }
  stringDate(date: Date): string {
    return date.toLocaleTimeString();
  }
  selectFiles(): void {
    (this.$refs.fileInput as HTMLInputElement).click();
  }
  uploadHandler(e: Event): void {
    const target = e.target as HTMLInputElement;
    const fileList = target.files;
    const fileArr = [];
    if (fileList) {
      for (let index = 0; index < fileList.length; ++index) {
        fileArr.push(fileList[index]);
      }
    }
    this.files = [...this.files, ...fileArr];
  }
  submit(): void {
    this.$emit("submit");
  }
}
export default AddList;
</script>
