<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        1. <b>Intermediate Steps</b><br />
        <small class="text-secondary"
          >These are your inmediate steps to complete</small
        >
      </div>
      <div class="col-4">
        <small v-if="totalTasks"
          ><strong class="resume-value">{{ pendingTasks }}/{{ totalTasks }} task left</strong></small
        >
        <div class="progress">
          <div
            class="progress-bar bg-secondary"
            role="progressbar"
            :style="progress_style"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Task from "@/models/Task";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Resume extends Vue {
  get progress() {
    return ((this.totalTasks - this.pendingTasks) / this.totalTasks) * 100;
  }

  get progress_style() {
    return {
      width: `${this.progress}%`
    };
  }

  get totalTasks() {
    return this.$store.getters?.tasks?.length;
  }

  get pendingTasks() {
    return this.$store.getters?.tasks?.filter((task: Task) => !task.completed)
      .length;
  }
}
</script>
<style lang="scss" scoped></style>
