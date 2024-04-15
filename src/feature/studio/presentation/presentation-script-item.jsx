import React, { useState } from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import AppContainer from "../../../core/components/container";
import ContainerState from "../../../core/enums/container-state";
import usePixiStore from "../../../pixi-zustand";
import { IoMdTrash } from "react-icons/io";
import { AppColor } from "../../../theme";
import { IoPencil } from "react-icons/io5";
import { RxFace } from "react-icons/rx";
import SidebarAction from "../data/sidebar-action";
import useStudioStore from "./studio-zustand";
import { RiDraggable } from "react-icons/ri";

const PresentationScriptItem = ({ presentationAction, listIndex }) => {
  const { currentPresentationActionIndex } = usePixiStore();
  const {
    setModalType,
    deleteAction,
    dragAndDrop,
    dragOverWithIndex,
    dragWithIndex,
    toDragActionIndex,
  } = useStudioStore();
  const [isActionBarShown, setActionBarShown] = useState(false);

  const buildEditButton = () => {
    return (
      <IconButton
        icon={<IoPencil />}
        rounded="full"
        bgColor={AppColor.accent}
        color={AppColor.text}
        _hover={{ filter: "brightness(120%)" }}
      />
    );
  };

  const buildDeleteButton = () => {
    return (
      <IconButton
        icon={<IoMdTrash />}
        rounded="full"
        bgColor={AppColor.accent}
        color={AppColor.text}
        _hover={{ filter: "brightness(120%)" }}
        onClick={() => deleteAction(listIndex)}
      />
    );
  };
  const buildActionBar = () => {
    switch (presentationAction.sidebarAction) {
      case SidebarAction.addDialouge:
        return (
          <HStack>
            <IconButton
              icon={<RxFace />}
              rounded="full"
              bgColor={AppColor.accent}
              color={AppColor.text}
              _hover={{ filter: "brightness(120%)" }}
              onClick={() => {
                setModalType(
                  SidebarAction.addFacialExpressionDuringSpeaking,
                  listIndex
                );
                setActionBarShown(false);
              }}
            />
            {buildEditButton()}
            {buildDeleteButton()}
          </HStack>
        );
      case SidebarAction.insertBreak:
        return (
          <HStack>
            {buildEditButton()}
            {buildDeleteButton()}
          </HStack>
        );
      default:
        return <HStack>{buildDeleteButton()}</HStack>;
    }
  };
  return (
    <HStack
      onMouseEnter={() => setActionBarShown(true)}
      onMouseLeave={() => setActionBarShown(false)}
      onDragStart={() => dragWithIndex(listIndex)}
      onDragOver={(event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        dragOverWithIndex(listIndex);
      }}
      onDrop={dragAndDrop}
      zIndex={1}
    >
      <AppContainer
        width="100%"
        state={
          listIndex == currentPresentationActionIndex ||
          listIndex == toDragActionIndex
            ? ContainerState.ACTIVE
            : ContainerState.DEFAULT
        }
      >
        {presentationAction.description}
      </AppContainer>
      {isActionBarShown && buildActionBar()}
    </HStack>
  );
};

export default PresentationScriptItem;
