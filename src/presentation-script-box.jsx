import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { AppColor } from "./theme";

const PresentationScriptBox = () => {
  return (
    <Stack
      bgColor={AppColor.primary}
      height="100%"
      p="24px"
      spacing="18px"
      borderTopLeftRadius="12px"
      borderBottomLeftRadius="12px"
      width="35%"
    >
      <Text color={AppColor.text} fontWeight="bold" fontSize="xl" mb="24px">
        Kịch bản trình bày
      </Text>
    </Stack>
  );
};

export default PresentationScriptBox;
