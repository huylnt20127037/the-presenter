import React from "react";
import AppModal from "../../../core/components/modal";
import { Stack, Text, Button } from "@chakra-ui/react";
import useActionStore from "./action-zustand";
import { AppColor } from "../../../theme";

const ActionModal = () => {
  const { isModalOpenedWithType, setModalType } = useActionStore();
  return (
    <AppModal
      headerText={isModalOpenedWithType}
      onClose={() => setModalType()}
      body={
        <Stack>
          <Text color="text">{"BODY"}</Text>
        </Stack>
      }
      footer={
        <Button
          bgColor={AppColor.accent}
          color={AppColor.text}
          _hover={{ filter: "brightness(120%)" }}
        >
          Hoàn tất
        </Button>
      }
    />
  );
};

export default ActionModal;
