<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12 text-center">
        <img class="text-center" width="200px" src="../../assets/logo.webp" />
      </div>
    </div>
    <div class="row">
      <div class="col-4 offset-4 mt-2">
        <form
          style="
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 3px;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          "
        >
          <div class="alert alert-danger" role="alert" v-if="showError">
            Invalid credentials
          </div>

          <div class="form-group">
            <label>Username</label>
            <input type="email" class="form-control" v-model="model.username" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              v-model="model.password"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="login">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Login } from "@/models/Login";
import { User } from "@/models/User";
import { Component, Vue } from "vue-property-decorator";
import json from "../../assets/data/users.json";

@Component({
  components: {},
})
export default class LoginView extends Vue {
  model: Login = {
    username: "",
    password: "",
  };
  showError: boolean = false;

  login() {
    this.showError = false;
    const users = json as User[];
    const user = users.find(
      (m) =>
        m.username === this.model.username && m.password === this.model.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      this.$store.dispatch("userLogged", user);
      this.$router.push("/");
    } else {
      this.showError = true;
    }
  }
}
</script>
<style lang="scss" scoped></style>
