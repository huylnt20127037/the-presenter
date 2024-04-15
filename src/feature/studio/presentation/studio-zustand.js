import { create } from "zustand";
import PresentationAction from "../data/presentation-action";
import SidebarAction from "../data/sidebar-action.jsx";

const useStudioStore = create((set, get) => ({
     isModalOpenedWithType: undefined,
     action: undefined,
     actionList: [],
     setModalType: (type, actionIndex) => {
          if (!type) {
               set(() => ({
                    isModalOpenedWithType: undefined,
                    action: undefined,
               }))
          }
          else {
               if (actionIndex == undefined) {
                    set(() => ({
                         isModalOpenedWithType: type,
                         action: new PresentationAction({
                              sidebarAction: type,
                         }),
                    }))
               }
               else {
                    set((state) => ({
                         isModalOpenedWithType: type,
                         action: Object.assign(state.actionList[actionIndex], {
                              sidebarAction: [state.actionList[actionIndex].sidebarAction, type]
                         }),
                    }))
               }

          }
     },
     updateAction: (value) => {
          switch (get().action.sidebarAction) {
               case SidebarAction.addDialouge:
                    get().action.description = `Nói "${value}"`
                    get().action.content = value
                    return;
               case SidebarAction.insertBreak:
                    get().action.description = `Dừng ${value} giây`
                    get().action.content = value
                    return;
          }
          if (get().action.sidebarAction.includes(SidebarAction.addFacialExpressionDuringSpeaking)) {
               get().action.description = (get().action.description).concat(` trong sự ${value}`)
               get().action.content = [get().action.content, value]
               get().setModalType()
               return
          }
     },
     createAction: () => {
          if (!get().action.content) return

          set((state) => ({
               actionList: [...state.actionList, state.action],
          }))
          get().setModalType()
     }
}));

export default useStudioStore;
