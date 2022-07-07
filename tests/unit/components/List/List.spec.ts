import { mount, createLocalVue } from "@vue/test-utils";
import ListTask from "@/components/List/TaskList.vue";
import Vuex, { Store } from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);
localVue.use(IconsPlugin)

describe("Test component list ", () => {
  let getters: any;
  let mutations: any;
  let store: Store<any>;
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: "mperdomo",
      fullName: "Maria Perdomo",
    })
  );

  beforeEach(() => {
    getters = {
      tasks: jest.fn(),
    };
    mutations = {
      setFilter: jest.fn(),
      setChecks: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
      mutations,
      state: {},
      actions: {
        findTasks({ commit }) {},
      },
    });
  });
  test("titulo de no hay tareas", () => {
    const wrapper = mount(ListTask, {
      computed: {
        filtersTask() {
          return [];
        },
      },
      store,
      localVue,
    });
    expect(wrapper.find(".empty-tasks").exists()).toBe(true);
    expect(wrapper.find(".empty-tasks").text()).toBe("No task yet.");
  });
  test("presenta titulo tarea", () => {
    const wrapper = mount(ListTask, {
      computed: {
        filtersTask() {
          return [
            {
              _id: "ba765be6-f2a6-4297-814e-56194c35c371",
              name: "Task 1",
              completed: true,
            },
          ];
        },
        checksAll() {
          return [
            {
              _id: "ba765be6-f2a6-4297-814e-56194c35c371",
              name: "Task 1",
              completed: true,
            },
          ];
        },
      },
      store,
      localVue,
    });
    expect(wrapper.find(".exists-tasks").exists()).toBe(true);
  });
});
