import { create } from "zustand";
import pixiApp from "./core/pixi";
import Character from "./core/pixi/character";
import SidebarAction from "./feature/studio/data/sidebar-action";
import AudioExtension from "./core/extensions/audio";

const usePixiStore = create((set, get) => ({
     thePresenter: undefined,
     currentPresentationActionIndex: undefined,

     bringThePresenterOntoStage: () => {
          let character = new Character(pixiApp.renderer)
          pixiApp.stage.addChild(character.container);
          set(() => ({ thePresenter: character }))
     },

     startPresentation: async (actionList) => {
          for (let i = 0; i < actionList.length; i++) {
               let action = actionList[i]
               if (action.sidebarAction == SidebarAction.addDialouge) {
                    await AudioExtension.readText(
                         action.content,
                         () => {
                              get().thePresenter.talking()
                              set(() => ({ currentPresentationActionIndex: i }))
                         },
                    )
                    get().thePresenter.idling()
               }
               else if (action.sidebarAction == SidebarAction.insertBreak) {
                    await new Promise(resolve => setTimeout(resolve, action.content * 1000))
               }
          }
     },

     stopPresentation: () => {
          get().thePresenter.idling()
          AudioExtension.stopReadingText()
     },
}));

export default usePixiStore;
