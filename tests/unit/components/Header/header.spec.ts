import { mount, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header/Header.vue";
import Vuex, { Store } from "vuex";
import { BootstrapVue } from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe("show component", () => {
  let getters: any;
  let store: any;
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
    store = new Vuex.Store({
      getters,
      state: {},
    });
  });
  test("Valida si hay tareas y no muestra", () => {
    const wrapper = mount(Header, {
      computed: {
        checksAll() {
          return [];
        },
      },
      store,
      localVue,
    });
    expect(wrapper.find(".head").exists()).toBe(true);
    expect(wrapper.find(".full-name").text()).toBe("Maria Perdomo");
  });
});
