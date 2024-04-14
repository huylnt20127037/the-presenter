import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { AppColor } from "../../../theme";
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
      justify="space-between"
    >
      <Text color={AppColor.text} fontWeight="bold" fontSize="xl" mb="24px">
        Kịch bản trình bày
      </Text>
      <Button
        bgColor={AppColor.accent}
        color={AppColor.text}
        _hover={{ filter: "brightness(120%)" }}
      >
        Bắt đầu trình bày
      </Button>
    </Stack>
  );
};

export default PresentationScriptBox;
