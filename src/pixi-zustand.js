import { create } from "zustand";
import pixiApp from "./core/pixi";
import Character from "./core/pixi/character";

const usePixiStore = create((set, get) => ({
     thePresenter: undefined,

     bringThePresenterOntoStage: () => {
          let character = new Character(pixiApp.renderer)
          pixiApp.stage.addChild(character.container);
          set(() => ({ thePresenter: character }))
     },
     startPresentation: (actionList) => {
          let interval = get().thePresenter.talking()
          for (let action of actionList) {
               // thePresenter.talking()
          }
     },
     stopPresentation: () => {
          get().thePresenter.idling()
     },
}));

export default usePixiStore;
