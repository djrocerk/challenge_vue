<template>
  <div class="tasks-statis">
    <div class="count">
      <span class="all-tasks"> {{ totalTask }} </span> Tasks.
    </div>
    <a class="btn-filters" @click="setFilters('all')" href="#all">All</a>
    <a class="btn-filters" @click="setFilters('completed')" href="#completed">completed</a>
    <a class="btn-filters" @click="setFilters('active')" href="#active">Active</a>
    <div class="completed">
      <span class="completed-tasks">
        {{ taskComplete }}
      </span>
       Tasks compeled.
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StacksTask extends Vue {
  get taskComplete(): number {
    return this.$store.getters.tasks.filter((task: any) => task.completed).length;
  }
  get totalTask(): number {
    return this.$store.getters.tasks.length;
  }
  setFilters(filter: string) {
    this.$store.state.filter = filter;
  }
  // changeItemStatus(){
  //   this.$store.dispatch("clearAll", this.taskComplete)
  // }

}
</script>

<style lang="scss" scoped>
.tasks-statis {
  display: flex;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 5px;
  margin-top: 1rem;

  .btn-filters {
    text-decoration: none;
    background-color: #7f7777;
    padding: 4px;
    border: 0.5px solid transparent;
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
    margin-left: 2px;

    &:hover {
      transform: scale(1.1);
      transition-duration: 0.3 s;
    }
  }

  > div {
    width: 50%;
    padding: 10px;
    font-size: 12px;
    user-select: none;

    span {
      color: #fff;
      padding: 2px 5px;
      border-radius: 3px;
    }
  }

  .count {
    float: left;

    span {
      background-color: #ff2442;
    }
  }

  .completed {
    float: right;
    text-align: right;

    span {
      background-color: #3db2ff;
    }
  }
}
</style>