<template>
  <div>historyLog</div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  name: "HistoryLog",
})
class HistoryLog extends Vue {
  created(): void {
    console.log("historylog");
  }
}
export default HistoryLog;
</script>
