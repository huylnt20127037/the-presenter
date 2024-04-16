import { create } from "zustand";
import PresentationAction from "../data/presentation-action";
import SidebarAction from "../data/sidebar-action.jsx";
import { cloneDeep } from "lodash";
import pixiApp from "../../../core/pixi/index.js";

const useStudioStore = create((set, get) => ({
     isModalOpenedWithType: undefined,
     action: undefined,
     actionList: [],
     fromDragActionIndex: undefined,
     toDragActionIndex: undefined,
     thePresenterClone: undefined,

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
          const element = get().actionList.splice(get().fromDragActionIndex, 1)[0];
          get().actionList.splice(get().toDragActionIndex, 0, element)
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
     })),
     importScript: async (file) => {
          let tempActionList = []
          let fileContent = await file.text()
          let fileContentArr = fileContent.split('\n')
          fileContentArr.forEach(line => {
               let lineArr = line.split(':')
               switch (lineArr[0]) {
                    case 'Nói':
                         tempActionList.push(new PresentationAction({
                              id: tempActionList.length,
                              sidebarAction: SidebarAction.addDialouge,
                              description: line.replace(':', ''),
                              content: lineArr[1].trim()
                         }))
                         break;
                    case 'Biểu cảm':
                         tempActionList.at(tempActionList.length - 1).sidebarAction = [tempActionList.at(tempActionList.length - 1).sidebarAction, SidebarAction.addFacialExpressionDuringSpeaking]
                         tempActionList.at(tempActionList.length - 1).description = `${tempActionList.at(tempActionList.length - 1).description} trong sự ${lineArr[1]}`
                         tempActionList.at(tempActionList.length - 1).content = [tempActionList.at(tempActionList.length - 1).content, lineArr[1].trim()]
                         break;
                    case 'Dừng':
                         tempActionList.push(new PresentationAction({
                              id: tempActionList.length,
                              sidebarAction: SidebarAction.insertBreak,
                              description: line.replace(':', ''),
                              content: lineArr[1].split(' ').at(1)
                         }))
                         break;
               }
          })
          set(() => ({
               isModalOpenedWithType: undefined,
               actionList: tempActionList,
          }))
     },
     cloneThePresenter: (thePresenter) => {
          let result = cloneDeep(thePresenter)
          pixiApp.stage.addChild(result.container)
          set(() => ({
               thePresenterClone: result
          }))
     },
     deleteThePresenterClone: () => {
          pixiApp.stage.removeChild(get().thePresenterClone?.container)
          set(() => ({
               thePresenterClone: undefined,
               isModalOpenedWithType: undefined,
          }))
     },
     changeBodyPart: (name, value) => {
          switch (name) {
               case 'hair':
                    get().thePresenterClone.updateHair(value)
                    break
          }
     }
}));

export default useStudioStore;
