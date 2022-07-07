<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <form
          style="
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 3px;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          "
          class="mt-5"
          v-if="task"
        >
          <div class="alert alert-info" role="alert" v-if="saved">
            Task saved successfully!
          </div>

          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="task.title" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="task.description"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="update">
            Save
          </button>
          <button
            type="button"
            @click="$router.push('/')"
            class="btn btn-outline-danger ml-2"
          >
            Return
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Task from "@/models/Task";
import { Component, Vue } from "vue-property-decorator";
import { uuid } from "vue-uuid";

@Component({
  components: {}
})
export default class TaskEdit extends Vue {
  id = this.$route.params.id;
  saved = false;
  task: Task = new Task("", "", "");
  
  created() {
    if (Number(this.id) === 0) {
      const _id = uuid.v4();
      const newTask = new Task(_id, "", "");
      this.task = newTask;
    } else {
      this.getTask();
    }
  }

  update() {
    if (Number(this.id) === 0) {
      const _id = uuid.v4();
      const newTask = new Task(_id, this.task.title, this.task.description);
      this.$store.commit("addItem", newTask);
      this.$router.push("/");
    } else {
      this.$store.dispatch("editItem", this.task);
    }

    this.saved = true;
  }

  getTask() {
    const id = this.$route.params.id;
    this.$store.dispatch("getItem", id);
    this.task = this.$store.getters.task;
  }
}
</script>
<style lang="scss" scoped></style>
