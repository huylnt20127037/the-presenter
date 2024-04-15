import React from "react";
import AppModal from "../../../core/components/modal";
import { HStack, Text, Button } from "@chakra-ui/react";
import useStudioStore from "./studio-zustand";
import { AppColor } from "../../../theme";
import PrimaryButton from "../../../core/components/primary-button";
import FormInput from "../../../core/components/input";
import SidebarAction from "../data/sidebar-action.jsx";
import {
  FacialExpression,
  getIconComponent,
} from "../data/facial-expression.jsx";
import SecondaryButton from "../../../core/components/secondary-button.jsx";

const ActionModal = () => {
  const {
    isModalOpenedWithType,
    action,
    setModalType,
    createAction,
    updateAction,
  } = useStudioStore();

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
    }
  };
  return (
    <AppModal
      headerText={isModalOpenedWithType}
      onClose={() => setModalType()}
      body={buildBody()}
      footer={
        Array.isArray(action.sidebarAction) ? undefined : (
          <PrimaryButton message="Hoàn tất" onClick={createAction} />
        )
      }
    />
  );
};

export default ActionModal;
