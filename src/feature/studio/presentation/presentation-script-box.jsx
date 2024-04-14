import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { AppColor } from "../../../theme";
import PrimaryButton from "../../../core/components/primary-button";
import { CiPlay1 } from "react-icons/ci";
import useStudioStore from "./studio-zustand";
import PresentationScriptItem from "./presentation-script-item";

const PresentationScriptBox = () => {
  const { actionList } = useStudioStore();
  return (
    <Stack
      bgColor={AppColor.primary}
      height="100%"
      p="24px"
      spacing="18px"
      borderTopLeftRadius="12px"
      borderBottomLeftRadius="12px"
      width="35%"
      justify="space-between"
    >
      <Text color={AppColor.text} fontWeight="bold" fontSize="xl" mb="24px">
        Kịch bản trình bày
      </Text>
      <Stack height="100%">
        {actionList.map((e) => (
          <PresentationScriptItem presentationAction={e} />
        ))}
      </Stack>
      <PrimaryButton icon={<CiPlay1 />} message="Bắt đầu trình bày" />
    </Stack>
  );
};

export default PresentationScriptBox;
