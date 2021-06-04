<template>
  <v-list>
    <v-list-item :key="item.id" v-for="item in logs">
      <span class="addList__time">[{{ stringDate(item.date) }}]</span>

      <span> - </span>

      {{ item.file }}
      {{ item.type }}

      <span v-if="item.type === 'added'"> to {{ item.target }} </span>
    </v-list-item>
  </v-list>
</template>
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
