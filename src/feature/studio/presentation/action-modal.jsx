import React from "react";
import AppModal from "../../../core/components/modal";
import { Stack, HStack, Text, Button } from "@chakra-ui/react";
import useStudioStore from "./studio-zustand";
import CustomizeCharacterAppearanceModal from "./customize-character-appearance-modal.jsx";
import PrimaryButton from "../../../core/components/primary-button";
import FormInput from "../../../core/components/input";
import SidebarAction from "../data/sidebar-action.jsx";
import {
  FacialExpression,
  getIconComponent,
} from "../data/facial-expression.jsx";
import SecondaryButton from "../../../core/components/secondary-button.jsx";
import { HiDownload } from "react-icons/hi";
import usePixiStore from "../../../pixi-zustand.js";

const ActionModal = () => {
  const {
    isModalOpenedWithType,
    action,
    setModalType,
    createAction,
    updateAction,
    importScript,
  } = useStudioStore();
  const { deleteThePresenterClone } = useStudioStore();

  const buildBody = () => {
    switch (isModalOpenedWithType) {
      case SidebarAction.addDialouge:
        return (
          <FormInput
            type="text"
            label="Nội dung thoại"
            width="100%"
            icon={SidebarAction.getIcon(isModalOpenedWithType)}
            onChange={(event) => updateAction(event.target.value)}
          />
        );
      case SidebarAction.insertBreak:
        return (
          <FormInput
            type="number"
            label="Số giây"
            width="100%"
            icon={SidebarAction.getIcon(isModalOpenedWithType)}
            onChange={(event) => updateAction(event.target.value)}
          />
        );
      case SidebarAction.addFacialExpressionDuringSpeaking:
        return (
          <HStack>
            {Object.values(FacialExpression).map((e, i) => (
              <SecondaryButton
                key={i}
                icon={getIconComponent(e)}
                message={e}
                onClick={() => updateAction(e)}
              />
            ))}
          </HStack>
        );
      case SidebarAction.importScript:
        return (
          <Stack>
            <SecondaryButton
              icon={<HiDownload />}
              message="Tải file mẫu về máy"
              onClick={() => document.getElementById("file-downloader").click()}
            />
            <a
              id="file-downloader"
              hidden
              href="src/assets/example-presentation-script-to-import.txt"
              download="example-presentation-script-to-import.txt"
            />
            <FormInput
              type="file"
              width="100%"
              onChange={(event) => importScript(event.target.files[0])}
            />
          </Stack>
        );
      case SidebarAction.customizeCharacterAppearance:
        return <CustomizeCharacterAppearanceModal />;
    }
  };
  return (
    <AppModal
      headerText={isModalOpenedWithType}
      onClose={() => {
        setModalType();
        deleteThePresenterClone();
      }}
      body={buildBody()}
      footer={
        Array.isArray(action.sidebarAction) ||
        action.sidebarAction == SidebarAction.importScript ? undefined : (
          <PrimaryButton message="Hoàn tất" onClick={createAction} />
        )
      }
      size={
        isModalOpenedWithType == SidebarAction.customizeCharacterAppearance
          ? "full"
          : "lg"
      }
    />
  );
};

export default ActionModal;
