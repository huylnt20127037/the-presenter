import React from "react";
import { Stack, Text, HStack } from "@chakra-ui/react";
import { AppColor } from "../../../theme";
import PrimaryButton from "../../../core/components/primary-button";
import { CiPlay1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import useStudioStore from "./studio-zustand";
import PresentationScriptItem from "./presentation-script-item";
import usePixiStore from "../../../pixi-zustand";
import SecondaryButton from "../../../core/components/secondary-button";

const PresentationScriptBox = () => {
  const { actionList } = useStudioStore();
  const { startPresentation, stopPresentation } = usePixiStore();

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
        {actionList.map((e, i) => (
          <PresentationScriptItem
            key={e.id}
            presentationAction={e}
            listIndex={i}
          />
        ))}
      </Stack>

      <HStack>
        <SecondaryButton
          icon={<CiStop1 />}
          message="Dừng"
          onClick={stopPresentation}
        />
        <PrimaryButton
          icon={<CiPlay1 />}
          message="Bắt đầu trình bày"
          onClick={() => startPresentation(actionList)}
        />
      </HStack>
    </Stack>
  );
};

export default PresentationScriptBox;
