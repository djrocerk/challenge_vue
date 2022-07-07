<template>
  <b-navbar
    class="head"
    toggleable="lg"
    type="light"
    variant="light"
    style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2)"
  >
    <b-navbar-brand href="#" @click="$router.push('/')"
      >Estate Assist</b-navbar-brand
    >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <em class="full-name">{{ user.fullName }}</em>
          </template>
          <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  get checksAll() {
    return this.$store.getters.tasks;
  }

  get user() {
    return JSON.parse(localStorage.getItem("user")!.toString());
  }

  logout() {
    localStorage.clear();
    this.$store.dispatch("logout", {});
    this.$router.push("/login");
  }
}
</script>
<style lang="scss" scoped></style>
