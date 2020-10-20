// npm install overmind overmind-react
// yarn add overmind overmind-react

import { createOvermind } from "overmind";
import { createHook } from "overmind-react";
import { primaryColor } from "./MainItems";

export const useOvermind = createHook();
export const overmind = createOvermind({
  state: {
    counter: 0,
    primaryColor: primaryColor,
    drawerState: true,
    belowSm: false,
    bigDevice: false,
    showColorPickerDialog: false,
  },
  actions: {
    increase({ state }, number) {
      state.counter += number;
    },
    setPrimaryColor({ state }, color) {
      state.primaryColor = color;
    },
    setBelowSm({ state }, b) {
      state.belowSm = b;
    },
    setBigDevice({ state }, b) {
      state.bigDevice = b;
      console.log("BIG: " + state.bigDevice);
    },
    setDrawerState({ state }, b) {
      state.drawerState = b;
    },
    setShowColorPickerDialog({ state }, b) {
      state.showColorPickerDialog = b;
    },
  },
});
