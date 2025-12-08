import { create } from "zustand";
import { Immer } from "immer";
import { WINDOW_CONFIG,INITIAL_Z_INDEX } from "#constants";

const useWindowstore = create(immer((set)=>({
    windows:WINDOW_CONFIG,
    nextZindex :INITIAL_Z_INDEX+1,

    OpenWindows:(windowKeys,data= null)=>set((state)=>{
        const win = state.windows[windowKeys];
        win.isOpen= true;
        win.zIndex = state.nextZindex;
       win .data = data ?? win.data; 
    }),
    CloseWindows:(windowKeys)=>set((state)=>{

    }),
    FocusWindows:(windowKeys )=>set((state)=>{

    }),
})));