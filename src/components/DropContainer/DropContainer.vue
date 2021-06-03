<template>
  <div class="dropContainer">
    <div class="dropContainer__title">Container A</div>
    <div class="dropContainer__container"></div>
  </div>
</template>
<style>
.dropContainer__container {
  width: 100%;
  height: 500px;
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
</style>
<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
@Component({
  name: "DropContainer",
})
export default class DropContainer extends Vue {
  created(): void {
    console.log("dropContainer");
  }
}
</script>
