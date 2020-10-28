import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        canvas: {
            x: 0,
            y: 0,
        },
        line: [
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
            },
        ],
        rectangle: [
            {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
            },
        ],
        fillBucket: [
            {
                x: 0,
                y: 0,
                color: "",
            },
        ],
    },
    mutations: {
        updateCanvas(state, value) {
            state.canvas = value;
        },
        updateLine(state, value) {
            state.line = value;
        },
        updateRect(state, value) {
            state.rectangle = value;
        },
        updateFillBucket(state, value) {
            state.fillBucket = value;
        },
    },
});
