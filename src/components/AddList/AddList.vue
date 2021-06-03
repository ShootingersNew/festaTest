<template>
  <div>addList</div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  name: "AddList",
})
class AddList extends Vue {
  created(): void {
    console.log("addList");
  }
}
export default AddList;
</script>
