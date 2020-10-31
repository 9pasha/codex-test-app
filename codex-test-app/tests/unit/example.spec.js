import { shallowMount, createLocalVue } from "@vue/test-utils";
import CanvasPixel from "@/components/CanvasPixel.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("CanvasPixel.vue", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        pixels: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ]
      }
    });
  });
  it("renders props.msg when passed", () => {
    const x = 1;
    const y = 1;
    const color = "";
    // const wrapper = shallowMount(ArticleFromInput, {
    //   propsData: { msg }
    // });
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x, y }
    });
    expect(wrapper.text()).toMatch(color);
  });
});
