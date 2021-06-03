<template>
  <v-row>
    <v-col>
      <v-list>
        <v-list-item :key="item.id" v-for="item in files">
          {{ item }}
          <v-list-action>
            <v-icon v-if="!active" color="grey lighten-1">
              mdi-star-outline
            </v-icon>
          </v-list-action>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col>
      <v-btn>ADD OBJECT</v-btn>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  name: "AddList",
})
class AddList extends Vue {
  files = ["бока", "Жока"];
  created(): void {
    console.log("addList");
  }
  stringDate(date: Date): string {
    return date.toLocaleTimeString();
  }
}
export default AddList;
</script>
