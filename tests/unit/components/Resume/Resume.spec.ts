import { mount, createLocalVue } from "@vue/test-utils";
import Resume from "@/components/Resume/Resume.vue";
import Vuex, { Store } from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe("Test component Resume ", () => {
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
  test("Total tareas completadas", () => {
    const wrapper = mount(Resume, {
      computed: {
        progress() {
          return 0;
        },
        progress_style() {
          return {};
        },
        totalTasks() {
          return 10;
        },
        pendingTasks() {
          return 2;
        },
      },
      store,
      localVue,
    });
    expect(wrapper.find(".resume-value").text()).toBe("2/10 task left");
  });
});
