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
          ["", "x", ""],
          ["o", "x", "o"],
          ["", "o", ""]
        ]
      }
    });
  });
  it("check correct color ''", () => {
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x: 1, y: 1 }
    });

    expect(wrapper.is(CanvasPixel)).toBeTruthy();
    expect(wrapper.vm.x).toEqual(1);
    expect(wrapper.vm.y).toEqual(1);
    expect(wrapper.text()).toMatch("");
  });
  it("check correct color 'o'", () => {
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x: 2, y: 3 }
    });

    expect(wrapper.is(CanvasPixel)).toBeTruthy();
    expect(wrapper.vm.x).toEqual(2);
    expect(wrapper.vm.y).toEqual(3);
    expect(wrapper.text()).toMatch("o");
  });
  it("check correct color 'x'", () => {
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x: 2, y: 2 }
    });

    expect(wrapper.is(CanvasPixel)).toBeTruthy();
    expect(wrapper.vm.x).toEqual(2);
    expect(wrapper.vm.y).toEqual(2);
    expect(wrapper.text()).toMatch("x");
  });
  it("check render", () => {
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x: 3, y: 1 }
    });

    expect(wrapper.html()).toContain(`<div class="canvas-px"></div>`);
    expect(wrapper.text()).toEqual("");
  });
  it("should match snapshots", () => {
    const wrapper = shallowMount(CanvasPixel, {
      localVue,
      store,
      propsData: { x: 2, y: 2 }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
