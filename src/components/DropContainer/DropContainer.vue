<template>
  <div class="dropContainer">container</div>
</template>

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
