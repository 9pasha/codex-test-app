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
          ["", "", "x"],
          ["", "", ""],
          ["", "", ""]
        ]
      }
    });
  });
  it("check params", () => {
    const x = 1;
    const y = 1;
    const color = "";
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x, y }
    });

    expect(wrapper.is(CanvasPixel)).toBeTruthy();
    expect(wrapper.vm.x).toEqual(x);
    expect(wrapper.vm.y).toEqual(y);
    expect(wrapper.text()).toMatch(color);
  });
  it("check render", () => {
    const x = 3;
    const y = 1;
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x, y }
    });

    expect(wrapper.html()).toContain(`<div class="canvas-px">x</div>`);
  });
  it("should match snapshots", () => {
    const x = 4;
    const y = 1;
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x, y }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
