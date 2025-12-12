// src/store/window.js
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "#constants";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    // Open a window (id = window key)
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    // Close a window
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

      // NEW — minimize (no name change)
   // ADD BELOW YOUR EXISTING ACTIONS
// -----------------------------------------------
// Minimize Window
minimizeWindow: (windowKey) =>
  set((state) => {
    const win = state.windows[windowKey];
    if (!win) return;

    // If window is maximized → restore (not minimize)
    if (win.isMaximized) {
      win.isMaximized = false;
      win.isMinimized = false;
      return;
    }

    // Otherwise normal minimize
    win.isMinimized = true;
    win.isMaximized = false;
  }),

// Maximize Window
maximizeWindow: (windowKey) =>
  set((state) => {
    const win = state.windows[windowKey];
    if (!win) return;
    win.isMaximized = true;
    win.isMinimized = false;
  }),

// Toggle Maximize (restore previous size)
toggleMaximize: (windowKey) =>
  set((state) => {
    const win = state.windows[windowKey];
    if (!win) return;
    win.isMaximized = !win.isMaximized;
    win.isMinimized = false; 
  }),
// -----------------------------------------------


    // Bring window to front
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;
