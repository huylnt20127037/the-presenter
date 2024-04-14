import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { AppColor } from "../../../theme";
import ActionModal from "./action-modal";
import SecondaryButton from "../../../core/components/secondary-button";
import SidebarAction from "../data/sidebar-action.jsx";
import useStudioStore from "./studio-zustand";

const Sidebar = () => {
  const { isModalOpenedWithType, setModalType } = useStudioStore();

  return (
    <Stack
      bgColor={AppColor.primary}
      height="100%"
      p="24px"
      spacing="18px"
      borderTopRightRadius="12px"
      borderBottomRightRadius="12px"
    >
      <Text color={AppColor.text} fontWeight="bold" fontSize="xl" mb="18px">
        Các câu lệnh cơ bản
      </Text>

      <SecondaryButton
        icon={SidebarAction.getIconComponent(SidebarAction.addDialouge)}
        message={SidebarAction.addDialouge}
        onClick={() => setModalType(SidebarAction.addDialouge)}
      />

      <SecondaryButton
        icon={SidebarAction.getIconComponent(SidebarAction.insertBreak)}
        message={SidebarAction.insertBreak}
        onClick={() => setModalType(SidebarAction.insertBreak)}
      />

      <Text color={AppColor.text} fontWeight="bold" fontSize="xl" my="18px">
        Nâng cao
      </Text>

      <SecondaryButton
        icon={SidebarAction.getIconComponent(SidebarAction.importScript)}
        message={SidebarAction.importScript}
        onClick={() => setModalType(SidebarAction.importScript)}
      />

      <SecondaryButton
        icon={SidebarAction.getIconComponent(
          SidebarAction.selectSpeakingAccent
        )}
        message={SidebarAction.selectSpeakingAccent}
        onClick={() => setModalType(SidebarAction.selectSpeakingAccent)}
      />

      {isModalOpenedWithType && <ActionModal />}
    </Stack>
  );
};

export default Sidebar;
