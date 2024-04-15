import React from "react";
import AppContainer from "../../../core/components/container";
import ContainerState from "../../../core/enums/container-state";
import usePixiStore from "../../../pixi-zustand";

const PresentationScriptItem = ({ presentationAction, listIndex }) => {
  const { currentPresentationActionIndex } = usePixiStore();

  return (
    <AppContainer
      key={listIndex}
      state={
        listIndex == currentPresentationActionIndex
          ? ContainerState.ACTIVE
          : ContainerState.DEFAULT
      }
    >
      {presentationAction.description}
    </AppContainer>
  );
};

export default PresentationScriptItem;
