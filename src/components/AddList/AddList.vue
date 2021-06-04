<template>
  <v-row class="addList">
    <v-col>
      <v-list class="addList__list">
        <v-list-item
          class="addList__listItem"
          :key="item.id"
          v-for="item in files"
        >
          <div class="addList__content">
            {{ item.name }}
            <v-list-item-action class="addList__delete">
              <v-icon v-if="!active" color="error"> mdi-close </v-icon>
            </v-list-item-action>
          </div>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col>
      <div>
        <v-btn
          class="addList__button addList__button_margin"
          @click="selectFiles"
          color="primary"
          >Select Image</v-btn
        >
        <input
          @change="uploadHandler"
          hidden
          ref="fileInput"
          type="file"
          name="file-input"
          multiple="True"
          accept="image/*"
        />
        <v-btn class="addList__button" color="success" @click="submit"
          >ADD OBJECT</v-btn
        >
      </div>
    </v-col>
  </v-row>
</template>
<style>
.addList {
  height: 100%;
}
.addList__list {
  border: 1px solid #333333 !important;
  width: 299px;
  min-height: 202px;
  overflow: hidden;
}
.addList__button_margin {
  margin-bottom: 20px;
}
.addList__listItem {
  font-size: 0.75em !important;
  line-height: 1.12em;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  vertical-align: middle !important;
  min-height: 0 !important;
  width: 100%;
}
.addList__content {
  position: relative;
  display: inline-block !important;
  padding-right: 30px;
}
.addList__button {
  display: block !important;
}
.addList__delete {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 0 !important;
  min-height: 24px;
}
</style>
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
