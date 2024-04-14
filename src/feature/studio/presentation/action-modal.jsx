import React from "react";
import AppModal from "../../../core/components/modal";
import { Stack, Text, Button } from "@chakra-ui/react";
import useStudioStore from "./studio-zustand";
import { AppColor } from "../../../theme";
import PrimaryButton from "../../../core/components/primary-button";
import FormInput from "../../../core/components/input";
import SidebarAction from "../data/sidebar-action.jsx";
import { MdOutlineDescription } from "react-icons/md";

const ActionModal = () => {
  const { isModalOpenedWithType, setModalType, submit, updateAction } =
    useStudioStore();

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
    }
  };
  return (
    <AppModal
      headerText={isModalOpenedWithType}
      onClose={() => setModalType()}
      body={buildBody()}
      footer={<PrimaryButton message="Hoàn tất" onClick={submit} />}
    />
  );
};

export default ActionModal;
