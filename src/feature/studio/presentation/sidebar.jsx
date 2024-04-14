import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { MdOutlineDescription } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";
import { IoPauseCircleOutline } from "react-icons/io5";
import { IoIosMove } from "react-icons/io";
import { BsMusicNoteList } from "react-icons/bs";
import { AppColor } from "../../../theme";
import useActionStore from "./action-zustand";
import ActionModal from "./action-modal";
import SecondaryButton from "../../../core/components/secondary-button";
import SidebarAction from "../data/sidebar-action";

const Sidebar = () => {
  const { isModalOpenedWithType, setModalType } = useActionStore();

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
        icon={<RiSpeakLine />}
        message={SidebarAction.addDialouge}
        onClick={() => setModalType(SidebarAction.addDialouge)}
      />

      <SecondaryButton
        icon={<IoPauseCircleOutline />}
        message={SidebarAction.insertBreak}
        onClick={() => setModalType(SidebarAction.insertBreak)}
      />

      <Text color={AppColor.text} fontWeight="bold" fontSize="xl" my="18px">
        Nâng cao
      </Text>

      <SecondaryButton
        icon={<MdOutlineDescription />}
        message={SidebarAction.importScript}
        onClick={() => setModalType(SidebarAction.importScript)}
      />

      <SecondaryButton
        icon={<BsMusicNoteList />}
        message={SidebarAction.selectSpeakingAccent}
        onClick={() => setModalType(SidebarAction.selectSpeakingAccent)}
      />

      {isModalOpenedWithType && <ActionModal />}
    </Stack>
  );
};

export default Sidebar;
