import { create } from "zustand";
import pixiApp from "./core/pixi";
import Character from "./core/pixi/character";

const usePixiZustand = create((set, get) => ({
     thePresenter: undefined,

     bringThePresenterOntoStage: () => {
          let character = new Character(pixiApp.renderer)
          pixiApp.stage.addChild(character.container);
          set(() => ({ thePresenter: character }))
     },

}));

export default usePixiZustand;
