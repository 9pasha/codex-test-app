import { shallowMount, createLocalVue } from "@vue/test-utils";
import ArticleFromInput from "@/components/ArticleFromInput.vue";
import Vue from 'vue';
import Vuex from "vuex";
import Vuetify from "vuetify";

const localVue = createLocalVue();

localVue.use(Vuex);
Vue.use(Vuetify);

describe("ArticleFromInput.vue", () => {
  let vuetify;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();
    store = new Vuex.Store({
      state: {
        canvas: {
          x: 5,
          y: 10
        },
        pixels: [
          ["", "x", ""],
          ["o", "x", "o"],
          ["", "o", ""]
        ],
        isCorrectCanvas: false
      },
      mutations: {
        updateLine(state, value) {},
        updateRect(state, value) {},
        updateFillBucket(state, value) {},
        updateCanvas(state, value) {},
        setOperations(state, value) {},
        updateIsCorrectCanvas(state, value) {}
      },
      actions: {
        draw() {}
      }
    });
  });
  it("check", () => {
    const wrapper = shallowMount(ArticleFromInput, {
      localVue,
      vuetify,
      store
    });

    expect(wrapper.is(ArticleFromInput)).toBeTruthy();
    // expect(wrapper.vm.x).toEqual(1);
    // expect(wrapper.vm.y).toEqual(1);
    // expect(wrapper.text()).toMatch("");
  });
});
