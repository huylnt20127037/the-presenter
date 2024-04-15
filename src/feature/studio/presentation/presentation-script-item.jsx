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

const PresentationScriptItem = ({ presentationAction, listIndex }) => {
  const { currentPresentationActionIndex } = usePixiStore();
  const { setModalType, deleteAction } = useStudioStore();
  const [isActionBarShown, setActionBarShown] = useState(false);

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
            <IconButton
              icon={<IoPencil />}
              rounded="full"
              bgColor={AppColor.accent}
              color={AppColor.text}
              _hover={{ filter: "brightness(120%)" }}
            />
            <IconButton
              icon={<IoMdTrash />}
              rounded="full"
              bgColor={AppColor.accent}
              color={AppColor.text}
              _hover={{ filter: "brightness(120%)" }}
              onClick={() => deleteAction(listIndex)}
            />
          </HStack>
        );
      case SidebarAction.insertBreak:
        return (
          <HStack>
            <IconButton
              icon={<IoPencil />}
              rounded="full"
              bgColor={AppColor.accent}
              color={AppColor.text}
              _hover={{ filter: "brightness(120%)" }}
            />
            <IconButton
              icon={<IoMdTrash />}
              rounded="full"
              bgColor={AppColor.accent}
              color={AppColor.text}
              _hover={{ filter: "brightness(120%)" }}
              onClick={() => deleteAction(listIndex)}
            />
          </HStack>
        );
      default:
        return (
          <HStack>
            <IconButton
              icon={<IoMdTrash />}
              rounded="full"
              bgColor={AppColor.accent}
              color={AppColor.text}
              _hover={{ filter: "brightness(120%)" }}
            />
          </HStack>
        );
    }
  };
  return (
    <HStack
      onMouseEnter={() => setActionBarShown(true)}
      onMouseLeave={() => setActionBarShown(false)}
    >
      <AppContainer
        width="100%"
        state={
          listIndex == currentPresentationActionIndex
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
