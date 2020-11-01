import { shallowMount, createLocalVue } from "@vue/test-utils";
import ArticleFromInput from "@/components/ArticleFromInput.vue";
import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";

const localVue = createLocalVue();

localVue.use(Vuex);
Vue.use(Vuetify);

describe("ArticleFromInput.vue", () => {
  let vuetify;
  let store;
  let actions;

  beforeEach(() => {
    vuetify = new Vuetify();
    actions = {
      draw: jest.fn()
    };
    store = new Vuex.Store({
      state: {
        canvas: {
          x: 5,
          y: 10
        },
        isCorrectCanvas: false
      },
      mutations: {
        updateLine: jest.fn(),
        updateRect: jest.fn(),
        updateFillBucket: jest.fn(),
        updateCanvas: jest.fn(),
        setOperations: jest.fn(),
        updateIsCorrectCanvas: jest.fn()
      },
      actions
    });
  });
  it("emulate button click", () => {
    const wrapper = shallowMount(ArticleFromInput, {
      localVue,
      vuetify,
      store
    });
    const button = wrapper.find(".save-button");

    button.trigger("click");
    expect(actions.draw).toHaveBeenCalled();
  });
  it("should correct view data", async () => {
    const wrapper = shallowMount(ArticleFromInput, {
      localVue,
      vuetify,
      store
    });

    await wrapper.setData({
      text: "C 20 4\nL 1 2 6 2\nL 6 3 6 4\nR 16 1 20 3\nB 10 2 o"
    });
    expect(wrapper.vm.text).toBe(
      "C 20 4\nL 1 2 6 2\nL 6 3 6 4\nR 16 1 20 3\nB 10 2 o"
    );

    const articles = wrapper.findAll("span");

    expect(articles).toHaveLength(4);
    expect(articles.at(0).text()).toEqual("C 20 4");
    expect(articles.at(1).text()).toEqual("L 1 2 6 2; L 6 3 6 4");
    expect(articles.at(2).text()).toEqual("R 16 1 20 3");
    expect(articles.at(3).text()).toEqual("B 10 2 o");
  });
  it("should match snapshots", () => {
    const wrapper = shallowMount(ArticleFromInput, {
      localVue,
      vuetify,
      store
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
