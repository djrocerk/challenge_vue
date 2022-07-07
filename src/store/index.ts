import Vue from "vue";
import Task from "../models/Task";
import Vuex from "vuex";
import { User } from "@/models/User";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogged: User,
    tasks: [] as Task[],
    task: {} as Task,
    filter: "all" as String,
    // checksAll: false as Boolean
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    task(state) {
      return state.task;
    },
    userLogged(state) {
      return state.userLogged;
    },
    // checksAll(state) {
    //   return state.checksAll
    // }
  },
  mutations: {
    userLogged(state, user) {
      state.userLogged = { ...user };
    },
    setFilter: (state, payload) => (state.filter = payload),

    setChecks(state, payload) {
      const allTodosCheks = state.tasks.map((tsk) => {
        return {
          ...tsk,
          completed: true,
        };
      });
      state.tasks = [...allTodosCheks];
      // state.checksAll = true
    },

    addItem: (state, item) => {
      state.tasks = [...state.tasks, item];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    editItem(state, { id, title, description, completed = false }) {
      const newState = state.tasks.map((tsk) => {
        if (tsk._id === id) {
          return {
            ...tsk,
            title: title,
            description: description,
            completed: completed,
          };
        }
        return tsk;
      });
      // state.checksAll = false
      state.tasks = [...newState];
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeItem(state, item) {
      const newState = state.tasks.filter((task) => task !== item);
      state.tasks = newState;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    getItem(state, id) {
      const taskfinded = state.tasks.find((task) => task._id === id) as Task;
      state.task = taskfinded;
    },
    deleteTodoDone(state, item) {
      const newState = state.tasks.filter((item) => item.completed == true);
      console.log(newState, "nose");
    },
    findTasks(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks")!.toString());
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", { item });
    },
    editItem({ commit }, { id, title, description }) {
      commit("editItem", { id, title, description });
    },
    toggleItem({ commit }, task) {
      commit("editItem", {
        id: task._id,
        title: task.title,
        description: task.description,
        completed: true,
      });
    },
    deleteItem({ commit }, item) {
      commit("removeItem", item);
    },
    allChecks({ commit }, tasks) {
      commit("setChecks", tasks);
    },
    deleteteTodos({ commit }, item) {
      commit("deleteTodoDone", item);
    },
    getItem({ commit }, id) {
      commit("getItem", id);
    },
    userLogged({ commit }, user) {
      commit("userLogged", user);
    },
    findTasks({ commit }) {
      commit("findTasks");
    },
  },
  modules: {},
});
