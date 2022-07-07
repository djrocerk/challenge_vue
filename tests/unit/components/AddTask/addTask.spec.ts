import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import AddTask from "@/components/AddTask/index.vue";
import Vuex, { Store } from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe("Test add task component", () => {
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
      actions: {},
    });
  });

  test("verificar input vacio y luego llenarlo", () => {
    const wrapper = shallowMount(AddTask, {
      computed: {},
      store,
      localVue,
    });
    expect(wrapper.vm.$data.taskName).toEqual("");
    const taskName = "1. I have make a test";
    wrapper.setData({ taskName });

    expect(wrapper.vm.$data.taskName).toEqual(taskName);
  });
});
