import { create } from "zustand";
import pixiApp from "./core/pixi";
import Character from "./core/pixi/character";
import SidebarAction from "./feature/studio/data/sidebar-action";
import AudioExtension from "./core/extensions/audio";

const usePixiStore = create((set, get) => ({
     thePresenter: undefined,

     bringThePresenterOntoStage: () => {
          let character = new Character(pixiApp.renderer)
          pixiApp.stage.addChild(character.container);
          set(() => ({ thePresenter: character }))
     },

     startPresentation: (actionList) => {
          for (let action of actionList) {
               switch (action.sidebarAction) {
                    case SidebarAction.addDialouge:
                         get().thePresenter.talking()
                         AudioExtension.readText(
                              action.content,
                              () => get().thePresenter.idling(),
                         )
                         break
               }
          }
     },

     stopPresentation: () => {
          get().thePresenter.idling()
          AudioExtension.stopReadingText()
     },
}));

export default usePixiStore;
