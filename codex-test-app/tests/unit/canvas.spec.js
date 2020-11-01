import { shallowMount, createLocalVue } from "@vue/test-utils";
import Canvas from "@/components/Canvas.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Canvas.vue", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        canvas: {
          x: 20,
          y: 20
        }
      }
    });
  });
  it("check correct color ''", () => {
    const wrapper = shallowMount(Canvas, {
      localVue,
      store
    });

    expect(wrapper.is(Canvas)).toBeTruthy();
    expect(wrapper.vm.x).toEqual(1);
    expect(wrapper.vm.y).toEqual(1);
    expect(wrapper.text()).toMatch("");
  });
});
