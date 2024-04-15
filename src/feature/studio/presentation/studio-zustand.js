import { create } from "zustand";
import PresentationAction from "../data/presentation-action";
import SidebarAction from "../data/sidebar-action.jsx";

const useStudioStore = create((set, get) => ({
     isModalOpenedWithType: undefined,
     action: undefined,
     actionList: [],
     setModalType: (type) => {
          if (!type) {
               set(() => ({
                    isModalOpenedWithType: undefined,
                    action: undefined,
               }))
          }
          else {
               set(() => ({
                    isModalOpenedWithType: type,
                    action: new PresentationAction({
                         sidebarAction: type,
                    }),
               }))
          }
     },
     updateAction: (value) => {
          switch (get().action.sidebarAction) {
               case SidebarAction.addDialouge:
                    get().action.description = `Nói "${value}"`
                    get().action.content = value
                    break;
               case SidebarAction.insertBreak:
                    get().action.description = `Dừng ${value} giây`
                    get().action.content = value
                    break;
          }
     },
     submit: () => {
          console.log(get().action);
          set((state) => ({
               actionList: [...state.actionList, state.action],
          }))
          get().setModalType()
     }
}));

export default useStudioStore;
