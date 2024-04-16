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
     bringThePresenterDownStage: () => {
          pixiApp.stage.removeChild(get().thePresenter.container);
     },
     bringThePresenterBackToStage: () => {
          pixiApp.stage.addChild(get().thePresenter.container);
     },
     updateThePresenter: (modified) => {
          pixiApp.stage.removeChild(get().thePresenter.container);
          pixiApp.stage.addChild(modified.container);
          set(() => ({ thePresenter: modified }))
     },

     startPresentation: async (actionList) => {
          let utterance = new SpeechSynthesisUtterance();
          utterance.lang = "vi-VN";
          // utterance.voice = window.speechSynthesis.getVoices()[315];
          for (let i = 0; i < actionList.length; i++) {
               let action = actionList[i]
               if (action.sidebarAction == SidebarAction.addDialouge) {
                    utterance.text = action.content;
                    utterance.onstart = () => {
                         get().thePresenter.talking()
                         set(() => ({ currentPresentationActionIndex: i }))
                    }
                    await AudioExtension.readText(utterance)
                    get().thePresenter.idling()
               }
               else if (action.sidebarAction.includes(SidebarAction.addFacialExpressionDuringSpeaking)) {
                    utterance.text = action.content[0];
                    utterance.onstart = () => {
                         get().thePresenter.showEmotionWhenTalking(action.content[1])
                         set(() => ({ currentPresentationActionIndex: i }))
                    }
                    await AudioExtension.readText(utterance)
                    get().thePresenter.idling()
               }
               else if (action.sidebarAction == SidebarAction.insertBreak) {
                    await new Promise(resolve => setTimeout(resolve, action.content * 1000))
               }
          }
          set(() => ({ currentPresentationActionIndex: undefined }))
     },

     stopPresentation: () => {
          get().thePresenter.idling()
          AudioExtension.stopReadingText()
          set(() => ({ currentPresentationActionIndex: undefined }))
     },
}));

export default usePixiStore;
