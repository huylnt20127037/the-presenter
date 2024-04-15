import { create } from "zustand";
import PresentationAction from "../data/presentation-action";
import SidebarAction from "../data/sidebar-action.jsx";

const useStudioStore = create((set, get) => ({
     isModalOpenedWithType: undefined,
     action: undefined,
     actionList: [],
     fromDragActionIndex: undefined,
     toDragActionIndex: undefined,

     setModalType: (type, actionIndex) => {
          if (!type) {
               set(() => ({
                    isModalOpenedWithType: undefined,
                    action: undefined,
               }))
          }
          else {
               if (actionIndex == undefined) {
                    set((state) => ({
                         isModalOpenedWithType: type,
                         action: new PresentationAction({
                              id: state.actionList.length,
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
     },
     deleteAction: (actionIndex) => {
          get().actionList.splice(actionIndex, 1)
          set((state) => ({
               actionList: [...state.actionList],
          }))
     },
     dragAndDrop: () => {
          let temp = get().actionList[get().fromDragActionIndex]
          get().actionList[get().fromDragActionIndex] = get().actionList[get().toDragActionIndex]
          get().actionList[get().toDragActionIndex] = temp
          set((state) => ({
               actionList: [...state.actionList],
               fromDragActionIndex: undefined,
               toDragActionIndex: undefined
          }))
     },
     dragWithIndex: (value) => set(() => ({
          fromDragActionIndex: value,
     })),
     dragOverWithIndex: (value) => set(() => ({
          toDragActionIndex: value,
     }))
}));

export default useStudioStore;
