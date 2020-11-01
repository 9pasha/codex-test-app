import { shallowMount, createLocalVue } from "@vue/test-utils";
import Canvas from "@/components/Canvas.vue";
import CanvasPixel from "@/components/CanvasPixel";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Canvas.vue", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        canvas: {
          x: 3,
          y: 10
        },
        isCorrectCanvas: false
      }
    });
  });
  it("check error alert", () => {
    const wrapper = shallowMount(Canvas, {
      localVue,
      store
    });
    const errorMsg =
      "Sorry, canvas can't be created. At first line of input.txt you need to create canvas(C x y) and set min-size: 2x2.";

    expect(wrapper.is(Canvas)).toBeTruthy();
    expect(wrapper.contains(CanvasPixel)).toBe(false);
    const errorEl = wrapper.find("h2");
    expect(errorEl.text()).toEqual(errorMsg);
  });
  it("check render without error", () => {
    store.state.isCorrectCanvas = true;
    const wrapper = shallowMount(Canvas, {
      localVue,
      store
    });

    expect(wrapper.is(Canvas)).toBeTruthy();
    expect(wrapper.findComponent(CanvasPixel)).toBeTruthy();
    const pixels = wrapper.findAllComponents(CanvasPixel);
    expect(pixels).toHaveLength(30);
    expect(wrapper.contains(".canvas h2")).toBe(false);
  });
  it("should match snapshots", () => {
    store.state.isCorrectCanvas = true;
    const wrapper = shallowMount(Canvas, {
      localVue,
      store
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
