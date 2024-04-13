import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { MdOutlineDescription } from "react-icons/md";
import { RiSpeakLine } from "react-icons/ri";
import { IoPauseCircleOutline } from "react-icons/io5";
import { IoIosMove } from "react-icons/io";
import { AppColor } from "./theme";

const Sidebar = () => {
  const actions = [
    {
      icon: <RiSpeakLine />,
      text: "Thêm câu thoại",
      onClick: undefined,
    },
    {
      icon: <IoPauseCircleOutline />,
      text: "Thêm khoảng nghỉ",
      onClick: undefined,
    },
    {
      icon: <IoIosMove />,
      text: "Di chuyển",
      onClick: undefined,
    },
    {
      icon: <MdOutlineDescription />,
      text: "Nhập thoại từ văn bản",
      onClick: undefined,
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
        >
          {e.text}
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
