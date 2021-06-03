<template>
  <div>image</div>
</template>
<script lang="ts">
import { Component } from "node_modules/vue-property-decorator";
import Vue from "vue";
@Component({
  name: "Image",
})
export default class Image extends Vue {
  created(): void {
    console.log("image");
  }
}
</script>
