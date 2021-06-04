<template>
  <v-list class="historyLog">
    <v-list-item class="historyLog__item" :key="item.id" v-for="item in logs">
      <span class="historyLog__time">[{{ stringDate(item.date) }}]</span>
      -
      {{ item.file }}
      {{ item.type }}

      <span v-if="item.type === 'added'">
        to <span class="historyLog__target">{{ item.target }}</span>
      </span>
    </v-list-item>
  </v-list>
</template>
<style scoped>
.historyLog {
  min-height: 200px;
  border: 2px solid #888;
  font-size: 0.75em;
}
.historyLog__time {
  color: #c4c4c4;
}
.historyLog__target {
  color: #0094ff;
}
.historyLog__item {
  display: inline-block !important;
  line-height: 1.12em;
  padding-top: 5px;
  padding-bottom: 5px;
  vertical-align: middle;
  min-height: unset;
  width: 100%;
}
</style>

<script lang="ts">
import EventModel from "@/models/EventModel";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component({
  name: "HistoryLog",
})
class HistoryLog extends Vue {
  @Prop({ default: [] }) logs: EventModel[];

  stringDate(date: Date): string {
    return date.toLocaleTimeString();
  }
}
export default HistoryLog;
</script>
