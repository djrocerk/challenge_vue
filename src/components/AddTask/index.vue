<template>
  <div class="add-task">
    <div class="form-inline">
      <div class="form-group mb-2">
        <button
          type="button"
          class="btn btn-info"
          @click="$router.push('/task/0')"
        >
          <b-icon-plus></b-icon-plus>
          Add task
        </button>
        <input
          v-model="taskName"
          type="text"
          class="form-control ml-2 block"
          placeholder="Find..."
          autofocus
          v-on:keyup="filterTask"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AddTask extends Vue {
  taskName: string = "";

  created() {
    this.filterTask();
  }

  filterTask(): void {
    this.$store.commit("setFilter", this.taskName);
  }
}
</script>
<style lang="scss" scoped>
</style>
