import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { MdOutlineDescription } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";
import { IoPauseCircleOutline } from "react-icons/io5";
import { IoIosMove } from "react-icons/io";
import { AppColor } from "./theme";
import useActionStore from "./action-zustand";
import ActionModal from "./action-modal";

const Sidebar = () => {
  const { isModalOpenedWithType, setModalType } = useActionStore();

  const actions = [
    {
      icon: <RiSpeakLine />,
      text: "Thêm câu thoại",
      onClick: () => setModalType("Thêm câu thoại"),
    },
    {
      icon: <IoPauseCircleOutline />,
      text: "Thêm khoảng nghỉ",
      onClick: () => setModalType("Thêm khoảng nghỉ"),
    },
    {
      icon: <IoIosMove />,
      text: "Di chuyển",
      onClick: () => setModalType("Di chuyển"),
    },
    {
      icon: <MdOutlineDescription />,
      text: "Nhập thoại từ văn bản",
      onClick: () => setModalType("Nhập thoại từ văn bản"),
    },
  ];

  return (
    <Stack
      bgColor={AppColor.primary}
      height="100%"
      p="24px"
      spacing="18px"
      borderTopRightRadius="12px"
      borderBottomRightRadius="12px"
    >
      <Text color={AppColor.text} fontWeight="bold" fontSize="xl" mb="24px">
        Các câu lệnh
      </Text>
      {actions.map((e, i) => (
        <Button
          justifyContent="start"
          key={i}
          bgColor={AppColor.secondary}
          leftIcon={e.icon}
          color={AppColor.text}
          _hover={{ filter: "brightness(120%)" }}
          onClick={e.onClick}
        >
          {e.text}
        </Button>
      ))}

      {isModalOpenedWithType && <ActionModal />}
    </Stack>
  );
};

export default Sidebar;
