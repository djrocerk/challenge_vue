<template>
  <div>
    <Header />
    <div id="app" class="container mt-5">
      <div class="row">
        <div class="col-12 mt-3">
          <div class="text-center">
            <img
              width="15%"
              src="../../assets/logo.webp"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-8 offset-2 mt-3"
          style="
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 3px;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          "
        >
          <Resume />
          <hr />
          <Task />
          <hr />
          <TaskList />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Task from "../AddTask/index.vue";
import Header from "../Header/Header.vue";
import TaskList from "../List/TaskList.vue";
import Resume from "../Resume/Resume.vue";

@Component({
  components: {
    Task,
    TaskList,
    Resume,
    Header
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
