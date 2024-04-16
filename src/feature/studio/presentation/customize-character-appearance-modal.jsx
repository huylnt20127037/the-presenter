import { HStack, Stack, Text, Image, Flex, Box } from "@chakra-ui/react";
import AppGrid from "../../../core/components/grid";
import CharacterBodyPart from "../data/character-body-part";
import { AppColor } from "../../../theme";
import * as PIXI from "pixi.js";
import { Stage } from "@pixi/react";
import AppContainer from "../../../core/components/container";
import { useEffect, useRef } from "react";
import pixiApp from "../../../core/pixi";
import usePixiStore from "../../../pixi-zustand";
import useStudioStore from "./studio-zustand";

const CustomizeCharacterAppearanceModal = () => {
  const pixiPreviewRef = useRef();
  const { thePresenter, bringThePresenterDownStage } = usePixiStore();
  const { cloneThePresenter } = useStudioStore();

  const buildHairChoice = () => {
    return (
      <Stack>
        <Text>Chọn 1 kiểu tóc</Text>
        <AppGrid
          numberOfColumns={3}
          items={CharacterBodyPart.hair.map((e) => (
            <AppContainer>
              <Image src={e} boxSize="72px" />
            </AppContainer>
          ))}
        />
      </Stack>
    );
  };
  const buildNoseChoice = () => {
    return (
      <Stack>
        <Text>Chọn 1 kiểu mũi</Text>
        <AppGrid
          numberOfColumns={3}
          items={CharacterBodyPart.nose.map((e) => (
            <AppContainer>
              <Image src={e} boxSize="24px" />
            </AppContainer>
          ))}
        />
      </Stack>
    );
  };
  const buildChoices = () => {
    return (
      <Stack spacing="24px">
        {buildHairChoice()}
        {buildNoseChoice()}
      </Stack>
    );
  };
  const buildPreview = () => {
    return <Box ref={pixiPreviewRef}></Box>;
  };

  useEffect(() => {
    pixiPreviewRef.current.appendChild(pixiApp.canvas);
    cloneThePresenter(thePresenter);
  }, []);

  return (
    <Flex justify="space-between">
      {buildChoices()}
      {buildPreview()}
    </Flex>
  );
};

export default CustomizeCharacterAppearanceModal;
