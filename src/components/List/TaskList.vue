<template>
  <span v-if="!filtersTask.length" class="empty-tasks">No task yet.</span>
  <div v-else>
    <TaskItem
      class="exists-tasks"
      v-for="task in filtersTask"
      :key="task._id"
      :task="task"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Task from "../../models/Task";
import TaskItem from "../shared/TaskItem/TaskItem.vue";

@Component({
  components: {
    TaskItem,
  },
})
export default class TaskList extends Vue {
  get filtersTask(): Task[] {
    // const options: any = {
    //   all: () => this.$store.getters.tasks,
    //   active: () =>
    //     this.$store.getters.tasks.filter((task: Task) => !task.completed),
    //   completed: () =>
    //     this.$store.getters.tasks.filter((task: Task) => task.completed),
    // };

    // return options[this.$store.state.filter]() || this.$store.getters.tasks;
    console.log("this.$store.getters.tasks: ", this.$store.getters.tasks);
    return this.$store.getters.tasks.filter(
      (m: Task) =>
        m.title
          .toLowerCase()
          .indexOf(this.$store.state.filter.toLowerCase()) !== -1
    );
  }
  changeItemStatus() {
    this.$store.dispatch("allChecks", this.filtersTask);
  }

  created() {
    this.$store.dispatch("findTasks");
  }
  get checksAll() {
    return this.$store.getters.tasks.filter((task: Task) => !task.completed)
      .length;
  }
}
</script>
<style lang="scss" scoped></style>
