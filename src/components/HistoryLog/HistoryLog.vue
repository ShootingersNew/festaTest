<template>
  <v-list>
    <v-list-item :key="item.id" v-for="item in eventItems">
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
import { Component } from "vue-property-decorator";
@Component({
  name: "HistoryLog",
})
class HistoryLog extends Vue {
  eventItems = [
    new EventModel({
      id: 1,
      file: "example_file_name.png",
      type: "loaded",
      date: new Date(),
    }),
  ];
  created(): void {
    console.log("addList");
  }
  stringDate(date: Date): string {
    return date.toLocaleTimeString();
  }
}
export default HistoryLog;
</script>
