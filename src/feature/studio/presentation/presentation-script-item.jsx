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

const PresentationScriptItem = ({ presentationAction, listIndex }) => {
  const { currentPresentationActionIndex } = usePixiStore();
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
        key={listIndex}
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
